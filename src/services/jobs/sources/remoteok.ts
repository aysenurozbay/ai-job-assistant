import type { Job } from "@/core/jobs/types";
import type { JobSource } from "@/core/jobs/source";
import { JobSearchCriteria } from "@/core/jobs/searchCriteria";

export class RemoteOKSource implements JobSource {
  name = "RemoteOK";

  async search(): Promise<Job[]> {
    const response = await fetch("https://remoteok.com/api");

    const data = await response.json();

    return data
      .filter((item: any) => item.position)
      .map((item: any) => ({
        id: String(item.id),

        title: item.position,

        company: item.company,

        description: item.description ?? "",

        location: item.location || "Remote",

        workplace: "Remote",

        employmentType: "Full-time",

        salary: item.salary_min
          ? `${item.salary_min}-${item.salary_max}`
          : undefined,

        source: "RemoteOK",

        url: item.url,

        postedAt: item.date,
      }));
  }
}
