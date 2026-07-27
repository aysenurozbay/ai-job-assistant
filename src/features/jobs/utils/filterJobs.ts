import { JobWithMatch } from "../types/job";

export function filterJobs(jobs: JobWithMatch[], minScore = 40) {
  return jobs
    .filter((job) => job.match.score >= minScore)
    .sort((a, b) => b.match.score - a.match.score);
}
