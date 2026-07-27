import { mockJobs } from "../mockJobs";
import type { Job } from "../types/job";

export async function getJobs(): Promise<Job[]> {
  // Şimdilik mock veri döndürüyoruz.
  // Sonra burası RemoteOK API çağrısı olacak.
  return mockJobs;
}
