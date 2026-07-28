import type { Job } from "@/core/jobs/types";
import { matchJob } from "@/features/jobs/utils/matchJob";

export function searchJobs(jobs: Job[]) {
  const rankedJobs = jobs
    .map((job) => {
      const match = matchJob(job);

      return {
        ...job,
        score: match.score,
        match,
      };
    })
    .sort((a, b) => b.score - a.score);

  console.table(
    rankedJobs.slice(0, 20).map((job) => ({
      title: job.title,
      company: job.company,
      score: job.score,
      matched: job.match.matchedSkills.join(", "),
    })),
  );

  return rankedJobs;
}
