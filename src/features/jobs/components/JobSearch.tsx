"use client";

import { useJobSearch } from "../hooks/useJobSearch";
import { JobList } from "./JobList";
import { SearchBar } from "./SearchBar";

export function JobSearch() {
  const { jobs, query, setQuery } = useJobSearch();

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />

      <JobList jobs={jobs} />
    </>
  );
}
