export default function robots() {
  const baseUrl = "https://sujansingh.in"; // Replace with your production domain
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
