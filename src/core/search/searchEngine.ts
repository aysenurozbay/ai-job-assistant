import type { Job } from "@/core/jobs/types";
import { careerProfile } from "@/core/profile/careerProfile";

export function searchJobs(jobs: Job[]): Job[] {
  return jobs
    .map((job) => ({
      ...job,
      score: calculateScore(job),
    }))
    .sort((a, b) => b.score - a.score);
}

function calculateScore(job: Job): number {
  let score = 0;

  const title = job.title.toLowerCase();

  careerProfile.preferredRoles.forEach((role) => {
    if (title.includes(role.toLowerCase())) {
      score += 40;
    }
  });

  careerProfile.skills.forEach((skill) => {
    if (title.includes(skill.toLowerCase())) {
      score += 5;
    }
  });

  return score;
}
