export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  workplace: "Remote" | "Hybrid" | "On-site";
  salary?: string;
  source: string;
};
