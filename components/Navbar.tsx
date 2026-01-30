"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Garis vertikal tipis (menggantung) */}
<div
  className="
    fixed
    top-1/2 -translate-y-1/2
    left-[100px]
    h-[95vh]
    w-[2px]
    bg-[#C5B8A6]/70
    z-40
  "
  aria-hidden="true"
/>


      {/* ================= LOGO (TERPISAH) ================= */}
      <div className="fixed left-1 top-3 z-50">
        <Image
          src="/logospellbook.png"
          alt="Spellbook Logo"
          width={110}
          height={110}
          className="opacity-100"
          priority
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className="
          fixed left-6 top-1/2 -translate-y-1/2
          z-50
          flex flex-col items-center
          select-none
        "
        aria-label="Primary"
      >
        {/* Menu utama */}
        <div className="flex flex-col items-center gap-6">
          <NavItem href="/" active={isActive("/")}>
            <HomeIcon className="w-7 h-7 md:w-8 md:h-8" />
          </NavItem>

          <NavItem href="/library" active={isActive("/library")}>
            <BookOpenIcon className="w-7 h-7 md:w-8 md:h-8" />
          </NavItem>

          <NavItem href="/reader" active={isActive("/reader")}>
            <DocumentTextIcon className="w-7 h-7 md:w-8 md:h-8" />
          </NavItem>
        </div>

        {/* Tombol bawah */}
        <button
          type="button"
          className="
            mt-8
            inline-flex items-center justify-center
            w-10 h-10
            rounded-full
            text-neutral-700
            hover:bg-black/5
            transition
          "
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-current rounded-sm" />
          <span className="block w-5 h-0.5 bg-current rounded-sm mt-[3px]" />
          <span className="block w-5 h-0.5 bg-current rounded-sm mt-[3px]" />
        </button>
      </nav>
    </>
  )
}

/* ===============================
   Item menu transparan + active
================================ */
function NavItem({
  href,
  active,
  children,
}: {
  href: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="
        group relative
        inline-flex items-center justify-center
        w-12 h-12
        rounded-full
        transition-transform duration-150
        hover:scale-110
      "
    >
      {/* Background aktif */}
      <span
        className={
          "absolute inset-0 rounded-full transition " +
          (active
            ? "bg-rose-400"
            : "bg-transparent group-hover:bg-black/5")
        }
        aria-hidden="true"
      />

      {/* Ikon */}
      <span
        className={`relative z-10 ${
          active ? "text-white" : "text-neutral-800"
        }`}
      >
        {children}
      </span>
    </Link>
  )
}
