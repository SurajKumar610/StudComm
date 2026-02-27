'use client';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">StudCommp</Link>
        <div className="flex gap-8 items-center text-lg">
          <Link href="/routes">Routes</Link>
          <Link href="/drivers">Drivers</Link>
          <Link href="/board">Board</Link>
          <SignedIn><Link href="/admin">Admin</Link><UserButton /></SignedIn>
          <SignedOut><SignInButton mode="modal" /></SignedOut>
        </div>
      </div>
    </nav>
  );
}
