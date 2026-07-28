import type { Job } from "@/core/jobs/types";
import { matchJob } from "@/features/jobs/utils/matchJob";
import { isEligible } from "../matching/isEligible";

export function searchJobs(jobs: Job[]) {
  return jobs

    .filter(isEligible)

    .map((job) => {
      const match = matchJob(job);

      return {
        ...job,

        score: match.score,

        match,
      };
    })

    .sort((a, b) => b.score - a.score);
}
