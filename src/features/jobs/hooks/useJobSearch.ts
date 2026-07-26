import { useMemo, useState } from "react";

import { mockJobs } from "../mockJobs";

export function useJobSearch() {
  const [query, setQuery] = useState("");

  const jobs = useMemo(() => {
    if (!query.trim()) return mockJobs;

    return mockJobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return {
    jobs,
    query,
    setQuery,
  };
}
