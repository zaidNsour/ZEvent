'use client'

import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return ( 
    <header>
      <nav>
        <Link href='/' className="logo"> 
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>ZEvent</p>
        </Link>

        <ul>
          <Link href='/' className="home">Home</Link>
          <Link href='/' className="home">Event</Link>
          <Link href='/' className="home">Create Event</Link>
        </ul>
      </nav>
    </header>
   );
}

export default NavBar;