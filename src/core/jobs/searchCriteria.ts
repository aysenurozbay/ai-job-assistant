export type JobSearchCriteria = {
  keywords: string[];

  locations: string[];

  workTypes: ("Remote" | "Hybrid" | "On-site")[];

  experienceLevels: string[];

  excludedKeywords: string[];
};
export const defaultSearchCriteria: JobSearchCriteria = {
  keywords: [
    "React Native",
    "React",
    "Frontend",
    "Frontend Developer",
    "Mobile Developer",
    "Business Analyst",
    "Product Owner",
  ],

  locations: ["Remote", "Germany", "Netherlands", "United Kingdom", "Türkiye"],

  workTypes: ["Remote", "Hybrid", "On-site"],

  experienceLevels: ["Junior", "Mid"],

  excludedKeywords: ["Principal", "Director", "VP", "Head of", "Staff", "Lead"],
};
