"use client";

import { useEffect, useMemo, useState } from "react";

import { getJobs } from "@/services/jobs/jobService";
import { matchJob } from "../utils/matchJob";
import { JobWithMatch } from "../types/job";
import { searchJobs } from "@/core/search/searchEngine";

export function useJobSearch() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState<JobWithMatch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await getJobs();
        const rankedJobs = searchJobs(data);

        const jobsWithMatch = rankedJobs.map((job) => ({
          ...job,

          match: matchJob(job),
        }));

        setJobs(jobsWithMatch);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    if (!query.trim()) return jobs;

    return jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [jobs, query]);

  return {
    jobs: filteredJobs,
    query,
    setQuery,
    loading,
  };
}
