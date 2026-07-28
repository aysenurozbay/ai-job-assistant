import type { Job } from "@/core/jobs/types";
import type { JobSource } from "@/core/jobs/source";
import { JobSearchCriteria } from "@/core/jobs/searchCriteria";
import { isSoftwareJob } from "@/core/jobs/isSoftwareJob";
export class RemoteOKSource implements JobSource {
  name = "RemoteOK";

  async search(): Promise<Job[]> {
    const response = await fetch("https://remoteok.com/api");

    const data = await response.json();
    console.log(
      "Software jobs:",
      data.filter(
        (item: any) =>
          item.position && isSoftwareJob(item.position, item.description ?? ""),
      ).length,
    );
    return data
      .filter((item: any) => {
        if (!item.position) {
          return false;
        }

        return isSoftwareJob(
          item.position,

          item.description ?? "",
        );
      })
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
