import type { Job } from "@/core/jobs/types";
import { JobCard } from "./JobCard";

type JobListProps = {
  jobs: Job[];
};

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
