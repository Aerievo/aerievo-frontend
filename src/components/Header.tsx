"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface HeaderProps {
  menu?: Menu[];
}

const FALLBACK_NAV: Menu[] = [
  { id: "home", menuName: "Home", link: "/", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: "", updatedAt: "", parentPage: null, segment: null, children: [] },
  { id: "solutions", menuName: "Solutions", link: "/services", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: "", updatedAt: "", parentPage: null, segment: null, children: [] },
  { id: "industries", menuName: "Industries", link: "/industries", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: "", updatedAt: "", parentPage: null, segment: null, children: [] },
  { id: "resources", menuName: "Resources", link: "/blog", parentPageId: null, sortOrder: 4, status: "active", isClickable: true, createdAt: "", updatedAt: "", parentPage: null, segment: null, children: [] },
  { id: "company", menuName: "Company", link: "/about", parentPageId: null, sortOrder: 5, status: "active", isClickable: true, createdAt: "", updatedAt: "", parentPage: null, segment: null, children: [] },
  { id: "contact", menuName: "Contact Us", link: "/client-support", parentPageId: null, sortOrder: 6, status: "active", isClickable: true, createdAt: "", updatedAt: "", parentPage: null, segment: null, children: [] },
];

export default function Header({ menu }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = menu && menu.length > 0 ? menu : FALLBACK_NAV;
  const isContactCta = (label: string) => label.toLowerCase().includes("contact");

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center py-2">
          <Image src="/logo.png" alt="Aerievo" width={158} height={37} priority className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium h-full">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.children) && item.children.length > 0;
            const isActive =
              item.link === "/" ? pathname === "/" : pathname.startsWith(item.link);
            const contactCta = isContactCta(item.menuName);

            if (contactCta) {
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className="inline-flex items-center rounded-md bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--primary-dark)]"
                >
                  {item.menuName}
                </Link>
              );
            }

            return (
              <div key={item.id} className="relative group flex items-center h-full">
                <Link
                  href={item.link}
                  className={`relative flex items-center gap-1.5 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200 outline-none ${
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-[color:var(--primary)]"
                  }`}
                >
                  <span>{item.menuName}</span>
                  {hasDropdown && (
                    <ChevronDown className="h-4 w-4 text-[color:var(--primary)] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-[color:var(--primary)] transition-all duration-300 ${
                      isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60"
                    }`}
                  />
                </Link>

                {hasDropdown && (
                  <div className="absolute top-[85%] left-0 w-64 rounded-xl bg-white border border-slate-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[100%] transition-all duration-300 z-50 overflow-hidden">
                    <div className="py-2 flex flex-col">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.link}
                          className={`relative pl-6 pr-5 py-3 text-sm font-semibold transition-all duration-200 text-left ${
                            pathname === sub.link
                              ? "text-[color:var(--primary)] bg-slate-50"
                              : "text-slate-600 hover:text-[color:var(--primary)] hover:bg-slate-50/60"
                          }`}
                        >
                          {sub.menuName}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          role="presentation"
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 shadow-2xl flex flex-col h-full overflow-y-auto transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <Image src="/logo.png" alt="Aerievo" width={140} height={33} className="h-7 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-6 flex-1 flex flex-col gap-1">
            {navItems.map((item) => {
              const hasDropdown = Array.isArray(item.children) && item.children.length > 0;
              const isActive = item.link === "/" ? pathname === "/" : pathname.startsWith(item.link);

              if (hasDropdown) {
                const expanded = activeDropdown === item.id;
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(expanded ? null : item.id)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left text-base font-semibold transition-colors duration-200 ${
                        isActive ? "text-[color:var(--primary)] bg-slate-50" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.menuName}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                          expanded ? "rotate-180 text-[color:var(--primary)]" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 pl-4 flex flex-col gap-1 border-l-2 border-slate-100 ml-4 mt-1 ${
                        expanded ? "max-h-96 opacity-100 py-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`px-4 py-3 rounded-md text-sm font-semibold transition-colors duration-200 ${
                            pathname === sub.link
                              ? "text-[color:var(--primary)] bg-slate-50"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/60"
                          }`}
                        >
                          {sub.menuName}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 ${
                    isActive ? "text-[color:var(--primary)] bg-slate-50" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.menuName}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
