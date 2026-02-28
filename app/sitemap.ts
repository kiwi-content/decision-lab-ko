import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const koPaths = [
    "/ko",
    "/ko/about",
    "/ko/methodology",
    "/ko/contact",
    "/ko/privacy",
    "/ko/terms",
    "/ko/throw-away",
    "/ko/text-my-ex",
    "/ko/quit-my-job",
    "/ko/break-up",
    "/ko/move",
    "/ko/small-choices",
  ];

  return koPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
