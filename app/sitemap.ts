import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const paths = [
    "/",
    "/about",
    "/methodology",
    "/contact",
    "/privacy",
    "/terms",
    "/throw-away",
    "/text-my-ex",
    "/quit-my-job",
    "/break-up",
    "/move",
    "/small-choices",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
