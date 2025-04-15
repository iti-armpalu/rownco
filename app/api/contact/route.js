export async function POST(request) {
  const body = await request.json();

  console.log('Dummy contact form received:', body);

  // Simulate a delay
  await new Promise((res) => setTimeout(res, 1000));

  // You could do basic validation here if needed
  if (!body.nameEmail || !body.message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), {
      status: 400,
    });
  }

  // Respond as if it worked
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
