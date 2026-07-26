import { mockJobs } from "../mockJobs";
import { JobCard } from "./JobCard";

export function JobList() {
  return (
    <div className="space-y-4">
      {mockJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
