import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://decisionlab.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/methodology`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/throw-away`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/throw-away`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/text-my-ex`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/text-my-ex`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/quit-my-job`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/quit-my-job`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/break-up`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/break-up`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/move`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/move`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ko/small-choices`,
      lastModified: new Date(),
    },
  ];
}
