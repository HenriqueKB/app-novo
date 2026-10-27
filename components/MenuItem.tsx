'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({ label, href, icon, activeIcon }: { label: string; href: string; icon?: React.ReactNode; activeIcon?: React.ReactNode }) {
 const pathname = usePathname();
 const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
 const normalizedHref = href.replace(/\/+$/, "") || "/";
 const active = normalizedPathname === normalizedHref || (normalizedHref !== "/" && normalizedPathname.startsWith(`${normalizedHref}/`));

 return (
 <li>
 <Link href={href} aria-current={active ? "page" : undefined} className={`flex items-center justify-center gap-0 rounded-md px-2 py-2 text-sm font-medium group-hover:justify-start group-hover:gap-3 ${active ? "bg-emerald-100 text-emerald-950" : "text-emerald-950 hover:bg-emerald-100"}`}>
 <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
 {active ? (activeIcon ?? icon) : icon}
 </span>
 <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-48 group-hover:opacity-100">
 {label}
 </span>
 </Link>
 </li>
 );
}