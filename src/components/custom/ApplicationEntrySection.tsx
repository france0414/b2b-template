import Link from "next/link";
import { ApplicationCard } from "@/components/fixed/ApplicationCard";
import type { ApplicationUseCase } from "@/lib/site-data";

interface ApplicationEntrySectionProps {
  applications: ApplicationUseCase[];
}

export function ApplicationEntrySection({ applications }: ApplicationEntrySectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">產業應用導覽</h2>
        <Link href="/applications" className="text-sm text-muted-foreground hover:text-foreground">
          查看全部應用
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {applications.slice(0, 3).map((useCase) => (
          <ApplicationCard key={useCase.id} application={useCase} />
        ))}
      </div>
    </section>
  );
}
