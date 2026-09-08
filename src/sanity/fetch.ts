import { notFound } from "next/navigation";
import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags: string[];
}): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: { tags },
    });
  } catch (err) {
    console.error("Sanity query failed:", err);
    notFound();
  }
}
