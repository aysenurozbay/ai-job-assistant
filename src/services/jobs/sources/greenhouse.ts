import type { Job } from "@/core/jobs/types";

import type { JobSource } from "@/core/jobs/source";

export class GreenhouseSource implements JobSource {
  name = "Greenhouse";

  async search(): Promise<Job[]> {
    return [];
  }
}
