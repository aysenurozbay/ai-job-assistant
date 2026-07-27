import { careerProfile } from "@/config/profile";
import type { Job } from "@/core/jobs/types";

export function matchJob(job: Job) {
  const text = `
    ${job.title}
    ${job.description}
  `.toLowerCase();

  const matchedSkills = careerProfile.skills.filter((skill) =>
    text.includes(skill.toLowerCase()),
  );

  const matchedRoles = careerProfile.roles.filter((role) =>
    text.includes(role.toLowerCase()),
  );

  const score = matchedSkills.length * 10 + matchedRoles.length * 20;

  return {
    score: Math.min(score, 100),
    matchedSkills,
    matchedRoles,
  };
}
