import { Literata, Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import FooterContainer from "./components/footer/footer-container";

// If loading a variable font, you don't need to specify the font weight
const literata = Literata({
  weight: ["400", "200"], // Specify the weights you need
  subsets: ["latin"],
  variable: "--font-literata",
});

const rubik = Rubik({
  weight: ["400"], // Specify the weights you need
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Row & Co",
  description:
    "Row & Co is an architecture and real estate development studio based in Dubai, UAE.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${literata.variable} ${rubik.variable}`}>
        {children}
        <FooterContainer />
      </body>
    </html>
  );
}
