import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Bypass Sanity's CDN cache so webhook-triggered revalidation always reads fresh data.
  useCdn: false,
  perspective: "published",
});
