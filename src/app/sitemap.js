export default async function sitemap() {
  const baseUrl = "https://sujansingh.in"; // Replace with your production domain

  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/faqs",
    "/imposters",
    "/disclosures",
    "/disclosures/grievances",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
