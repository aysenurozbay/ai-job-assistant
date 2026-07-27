export type Job = {
  id: string;

  title: string;

  company: string;

  description: string;

  location: string;

  workplace: "Remote" | "Hybrid" | "On-site";

  employmentType?: string;

  salary?: string;

  source: string;

  url: string;

  postedAt?: string;
};
