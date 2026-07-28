import { careerProfile } from "@/core/profile/careerProfile";
import type { Job } from "@/core/jobs/types";

export function matchJob(job: Job) {
  const title = job.title.toLowerCase();

  const description = (job.description ?? "").toLowerCase();

  let score = 0;

  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];

  // Description'daki teknolojiler

  careerProfile.skills.forEach((skill) => {
    if (description.includes(skill.name.toLowerCase())) {
      score += skill.weight;

      matchedSkills.push(skill.name);
    } else {
      missingSkills.push(skill.name);
    }
  });

  // Başlık bonusu

  careerProfile.preferredRoles.forEach((role) => {
    if (title.includes(role.toLowerCase())) {
      score += 10;
    }
  });

  // Remote bonusu

  if (job.workplace === "Remote") {
    score += 10;
  }

  // Lokasyon bonusu

  if (
    careerProfile.preferredLocations.some((location) =>
      (job.location ?? "").toLowerCase().includes(location.toLowerCase()),
    )
  ) {
    score += 5;
  }

  return {
    score,

    matchedSkills,

    missingSkills,

    matchedRoles: [],
  };
}
