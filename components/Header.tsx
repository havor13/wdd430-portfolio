import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sampson Havor</h1>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
