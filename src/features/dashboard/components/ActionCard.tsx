import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ActionCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ActionCard({ title, description, href }: ActionCardProps) {
  return (
    <Link href={href}>
      <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>

            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
