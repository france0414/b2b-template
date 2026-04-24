import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site-data";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-900">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">{company.name}</h3>
            <p className="mb-4 text-sm leading-7 text-slate-600">{company.description}</p>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{company.email}</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">核心頁面</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/applications" className="transition-colors hover:text-blue-600">
                  產業應用
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-blue-600">
                  產品中心
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-blue-600">
                  部落格
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">外銷與服務</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>國際交付支援</li>
              <li>技術文件協作</li>
              <li>樣品到量產轉換</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">公司資訊</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="transition-colors hover:text-blue-600">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-blue-600">
                  品牌歷程
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Container>

      <div className="border-t border-slate-200 bg-slate-50/80">
        <Container className="py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <span>隱私權政策</span>
              <span>服務條款</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
