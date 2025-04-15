// /app/api/projects/route.js

import projects from '@/lib/projects';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (!type) {
    return new Response(JSON.stringify({ message: 'Missing type param' }), {
      status: 400,
    });
  }

  const filtered = projects.filter(p => p.type === type);

  return Response.json(filtered);
}
