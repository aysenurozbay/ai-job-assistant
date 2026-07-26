import { JobSearch } from "./components/JobSearch";

export function JobsPage() {
  return (
    <main className="container mx-auto max-w-5xl space-y-8 py-10">
      <header>
        <h1 className="text-3xl font-bold">Job Search</h1>

        <p className="mt-2 text-muted-foreground">
          Search and discover your next opportunity.
        </p>
      </header>

      <JobSearch />
    </main>
  );
}
