'use client'

import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

function NavBar() {
  return ( 
    <header>
      <nav>
        <Link href='/' className="logo"> 
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>ZEvent</p>
        </Link>

        <ul>
          <Link href='/' className="home" onClick={() => posthog.capture("nav_link_clicked", { label: "Home" })}>Home</Link>
          <Link href='/' className="home" onClick={() => posthog.capture("nav_link_clicked", { label: "Event" })}>Event</Link>
          <Link href='/' className="home" onClick={() => posthog.capture("nav_link_clicked", { label: "Create Event" })}>Create Event</Link>
        </ul>
      </nav>
    </header>
   );
}

export default NavBar;