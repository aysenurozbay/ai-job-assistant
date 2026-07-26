import { ActionCard } from "./ActionCard";

export function QuickActions() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <ActionCard
        title="Search Jobs"
        description="Find new React Native opportunities."
        href="/jobs"
      />

      <ActionCard
        title="Applications"
        description="Track your application status."
        href="/applications"
      />

      <ActionCard
        title="AI Analysis"
        description="Analyze your compatibility with job postings."
        href="/analysis"
      />
    </section>
  );
}
