export function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed p-10 text-center">
      <h2 className="text-xl font-semibold">No jobs found</h2>

      <p className="mt-2 text-muted-foreground">
        Start searching to see available jobs.
      </p>
    </div>
  );
}
