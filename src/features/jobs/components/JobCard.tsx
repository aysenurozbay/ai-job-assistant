import type { Job } from "@/core/jobs/types";
import { Card, CardContent } from "@/components/ui/card";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardContent className="py-5 space-y-2">
        <h2 className="text-lg font-semibold">{job.title}</h2>

        <p className="text-sm text-muted-foreground">{job.company}</p>

        <p className="text-sm">
          {job.workplace} • {job.location}
        </p>

        {job.salary && <p className="text-sm font-medium">{job.salary}</p>}

        <p className="text-xs text-muted-foreground">{job.source}</p>
      </CardContent>
    </Card>
  );
}
