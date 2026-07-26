import { DashboardHeader } from "../components/DashboardHeader";
import { QuickActions } from "../components/QuickActions";

export function DashboardPage() {
  return (
    <main className="container mx-auto py-10">
      <DashboardHeader />

      <QuickActions />
    </main>
  );
}
