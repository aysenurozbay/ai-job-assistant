import { SearchBar, SearchBar } from "./components/SearchBar";
import { JobList } from "./components/JobList";

export function JobsPage() {
  return (
    <main className="container mx-auto max-w-5xl py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Job Search</h1>

        <p className="mt-2 text-muted-foreground">
          Search and discover your next opportunity.
        </p>
      </header>
      <SearchBar />
      <JobList />
    </main>
  );
}
