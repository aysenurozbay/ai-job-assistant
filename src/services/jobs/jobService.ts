import { RemoteOKSource } from "./sources/remoteok";
import type { JobSource } from "@/core/jobs/source";

const sources: JobSource[] = [new RemoteOKSource()];

export async function getJobs() {
  const results = await Promise.all(sources.map((source) => source.search()));

  return results.flat();
}
