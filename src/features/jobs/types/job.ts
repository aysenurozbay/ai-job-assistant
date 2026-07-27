import { Job } from "@/core/jobs/types";

export type JobWithMatch = Job & {
  match: {
    score: number;

    matchedSkills: string[];

    matchedRoles: string[];
  };
};
