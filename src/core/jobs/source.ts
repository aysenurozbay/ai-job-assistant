import type { Job } from "./types";

export interface JobSource {
  name: string;

  search(): Promise<Job[]>;
}
