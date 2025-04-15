// /lib/projects.js

const projects = [
  {
    slug: 'la-ville',
    type: 'residential',
    title: 'La Vile',
    image: '/images/villa-oasis.jpg',
    location: 'Dubai, UAE',
    description: 'Introducing "Harmony Heights," an exquisite residential haven where every detail is meticulously crafted to redefine the art of living. Nestled in a serene neighborhood, our thoughtfully designed homes seamlessly blend luxury and functionality, offering a sanctuary where families thrive. With panoramic views, state-of-the-art amenities, and a commitment to timeless design, Harmony Heights is more than a residence; its a celebration of elevated living. Welcome to a place where every moment feels like home.',
    involvement: 'As the visionary lead architect of "Harmony Heights," I orchestrated a symphony of design brilliance and functionality, infusing each residence with a unique blend of aesthetic allure and practicality. Guiding the project from conception to realization, my passion for innovative architecture has left an indelible mark on every detail, ensuring that each space reflects the epitome of modern living. With an unwavering commitment to excellence, I shaped the project to not only meet but exceed the expectations of those who seek a harmonious blend of luxury and thoughtful design. Welcome to "Harmony Heights," where my architectural vision transforms spaces into living masterpieces.',
  },
  {
    slug: 'residential-villa-oasis-2',
    type: 'residential',
    title: 'Villa Oasis',
    image: '/images/villa-oasis.jpg',
    location: 'Dubai, UAE',
    description: 'Introducing "Harmony Heights," an exquisite residential haven where every detail is meticulously crafted to redefine the art of living. Nestled in a serene neighborhood, our thoughtfully designed homes seamlessly blend luxury and functionality, offering a sanctuary where families thrive. With panoramic views, state-of-the-art amenities, and a commitment to timeless design, Harmony Heights is more than a residence; its a celebration of elevated living. Welcome to a place where every moment feels like home.',
    involvement: 'As the visionary lead architect of "Harmony Heights," I orchestrated a symphony of design brilliance and functionality, infusing each residence with a unique blend of aesthetic allure and practicality. Guiding the project from conception to realization, my passion for innovative architecture has left an indelible mark on every detail, ensuring that each space reflects the epitome of modern living. With an unwavering commitment to excellence, I shaped the project to not only meet but exceed the expectations of those who seek a harmonious blend of luxury and thoughtful design. Welcome to "Harmony Heights," where my architectural vision transforms spaces into living masterpieces.',
  },
  {
    slug: 'commercial-retail-hub',
    type: 'commercial',
    title: 'Retail Hub',
    image: '/images/retail-hub.jpg',
    location: 'Dubai, UAE',
    description: 'Introducing "Harmony Heights," an exquisite residential haven where every detail is meticulously crafted to redefine the art of living. Nestled in a serene neighborhood, our thoughtfully designed homes seamlessly blend luxury and functionality, offering a sanctuary where families thrive. With panoramic views, state-of-the-art amenities, and a commitment to timeless design, Harmony Heights is more than a residence; its a celebration of elevated living. Welcome to a place where every moment feels like home.',
    involvement: 'As the visionary lead architect of "Harmony Heights," I orchestrated a symphony of design brilliance and functionality, infusing each residence with a unique blend of aesthetic allure and practicality. Guiding the project from conception to realization, my passion for innovative architecture has left an indelible mark on every detail, ensuring that each space reflects the epitome of modern living. With an unwavering commitment to excellence, I shaped the project to not only meet but exceed the expectations of those who seek a harmonious blend of luxury and thoughtful design. Welcome to "Harmony Heights," where my architectural vision transforms spaces into living masterpieces.',
  },
  {
    slug: 'commercial-retail-hub-2',
    type: 'commercial',
    title: 'Retail Hub',
    image: '/images/retail-hub.jpg',
    location: 'Dubai, UAE',
    description: 'Introducing "Harmony Heights," an exquisite residential haven where every detail is meticulously crafted to redefine the art of living. Nestled in a serene neighborhood, our thoughtfully designed homes seamlessly blend luxury and functionality, offering a sanctuary where families thrive. With panoramic views, state-of-the-art amenities, and a commitment to timeless design, Harmony Heights is more than a residence; its a celebration of elevated living. Welcome to a place where every moment feels like home.',
    involvement: 'As the visionary lead architect of "Harmony Heights," I orchestrated a symphony of design brilliance and functionality, infusing each residence with a unique blend of aesthetic allure and practicality. Guiding the project from conception to realization, my passion for innovative architecture has left an indelible mark on every detail, ensuring that each space reflects the epitome of modern living. With an unwavering commitment to excellence, I shaped the project to not only meet but exceed the expectations of those who seek a harmonious blend of luxury and thoughtful design. Welcome to "Harmony Heights," where my architectural vision transforms spaces into living masterpieces.',
  },
];

export default projects;

export async function getProjectsByType(type) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/api/projects?type=${type}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${type} projects`);
    }

    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error(`Error fetching ${type} projects:`, error.message);
    return null;
  }
}

export async function getProjectData(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/api/projects/${slug}`);
    if (!response.ok) {
      throw new Error(`Error fetching project: ${response.statusText}`);
    }
    const project = await response.json();
    if (project.error) {
      throw new Error(project.error);
    }
    return project;
  } catch (error) {
    console.error(`Error fetching project: ${error.message}`);
    return null;
  }
}
