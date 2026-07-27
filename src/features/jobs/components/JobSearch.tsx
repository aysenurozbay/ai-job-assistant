"use client";

import { useJobSearch } from "../hooks/useJobSearch";
import { JobList } from "./JobList";
import { SearchBar } from "./SearchBar";

export function JobSearch() {
  const { jobs, loading, query, setQuery } = useJobSearch();

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <>
      {/* <SearchBar value={query} onChange={setQuery} /> */}

      <JobList jobs={jobs} />
    </>
  );
}
