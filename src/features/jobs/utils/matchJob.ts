import { careerProfile } from "@/core/profile/careerProfile";
import type { Job } from "@/core/jobs/types";

export function matchJob(job: Job) {
  const text = `
    ${job.title}
    ${job.description}
    ${job.company}
    ${job.location}
    ${job.employmentType}
  `.toLowerCase();

  const matchedSkills = careerProfile.skills.filter((skill) =>
    text.includes(skill.toLowerCase()),
  );

  const matchedRoles = careerProfile.preferredRoles.filter((role) =>
    text.includes(role.toLowerCase()),
  );

  let score = 0;

  score += matchedRoles.length * 30;
  score += matchedSkills.length * 8;

  if (
    careerProfile.preferredLocations.some((location) =>
      text.includes(location.toLowerCase()),
    )
  ) {
    score += 10;
  }

  if (job.workplace && careerProfile.workTypes.includes(job.workplace)) {
    score += 15;
  }

  return {
    score: Math.min(score, 100),
    matchedSkills,
    matchedRoles,
  };
}
