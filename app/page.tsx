import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-7xl font-bold mb-6">Safe rides.<br />Real students.</h1>
        <p className="text-2xl text-gray-600 mb-10">Connect with verified drivers &amp; classmates on your exact route.</p>
        <SignedIn><Link href="/routes" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-5 rounded-2xl font-medium">Open Dashboard →</Link></SignedIn>
        <SignedOut><RedirectToSignIn /></SignedOut>
      </div>
    </div>
  );
}
