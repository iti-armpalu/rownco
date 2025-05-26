"use client";

import { useEffect, useState } from "react";

export default function InlineSVG({ url, className }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchSVG = async () => {
      try {
        console.log("Fetching SVG from:", url);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Failed to fetch SVG. Status: ${res.status}`);
        }

        const text = await res.text();

        // Log preview
        console.log("Fetched SVG content (truncated):", text.slice(0, 200));

        // Very basic sanity check
        if (!text.includes("<svg")) {
          throw new Error("Fetched content is not valid SVG");
        }

        setSvg(text);
      } catch (err) {
        console.error("SVG fetch error:", err);
        setError(err.message);
      }
    };

    fetchSVG();
  }, [url]);

  if (error) {
    return <div style={{ color: "red" }}>⚠️ SVG Error: {error}</div>;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
