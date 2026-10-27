export default function Menu({children}: {children?: React.ReactNode}) {
 return (
 <div className="sticky top-16 z-40 h-[calc(100dvh-4rem)] w-16 shrink-0">
 <aside className="group absolute inset-y-0 left-0 w-16 overflow-hidden border-r border-emerald-950 bg-amber-50 p-2 text-emerald-950 transition-[width] duration-300 hover:w-64">
 <nav>
 <ul className="flex flex-col gap-2">
 {children}
 </ul>
 </nav>
 </aside>
 </div>
 );
}