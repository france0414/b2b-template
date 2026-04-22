import { company } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-zinc-50">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <section>
          <h2 className="text-base font-semibold">{company.name}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{company.slogan}</p>
        </section>
        <section>
          <h2 className="text-sm font-semibold">聯絡資訊</h2>
          <p className="mt-2 text-sm text-muted-foreground">{company.phone}</p>
          <p className="text-sm text-muted-foreground">{company.email}</p>
        </section>
        <section>
          <h2 className="text-sm font-semibold">地址</h2>
          <p className="mt-2 text-sm text-muted-foreground">{company.address}</p>
        </section>
      </div>
    </footer>
  );
}
