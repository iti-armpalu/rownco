import projects from '@/lib/projects';

export async function GET(request, segmentData) {
  const { slug } = await segmentData.params; // new Next.js 15 requirement

  console.log(`Fetching project with slug: ${slug}`);
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return new Response(JSON.stringify({ message: 'Not found' }), {
      status: 404,
    });
  }

  return Response.json(project);
}
