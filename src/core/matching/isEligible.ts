import type { Job } from "@/core/jobs/types";
import { careerProfile } from "@/core/profile/careerProfile";

export function isEligible(job: Job): boolean {
  const text = `
    ${job.title}
    ${job.description}
  `.toLowerCase();

  // İstenmeyen kıdem seviyeleri
  if (
    careerProfile.excludedKeywords.some((keyword) =>
      text.includes(keyword.toLowerCase()),
    )
  ) {
    return false;
  }

  // En az bir rol eşleşmeli
  const hasRole = careerProfile.preferredRoles.some((role) =>
    text.includes(role.toLowerCase()),
  );

  return hasRole;
}
