import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site-data";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full bg-slate-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h3 className="mb-4 text-lg font-bold">{company.name}</h3>
            <p className="mb-4 text-sm text-slate-300">{company.description}</p>
            <div className="space-y-2 text-sm text-slate-300">
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
            <h3 className="mb-4 text-lg font-bold">核心頁面</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/applications" className="hover:text-white">
                  產業應用
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  產品中心
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  部落格
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-bold">外銷與服務</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>國際交付支援</li>
              <li>技術文件協作</li>
              <li>樣品到量產轉換</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-bold">公司資訊</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  品牌歷程
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
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
