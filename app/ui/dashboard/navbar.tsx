import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <Link href="/" className="text-white text-lg font-semibold">
                Home
              </Link>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                <Link href="/" className="text-white text-lg font-semibold">
                About
              </Link>
                </li>
                <li>
                <Link href="/contact" className="text-white text-lg font-semibold">
                Contact
              </Link>
                </li>
                {/* Aggiungi altri link della navbar qui */}
              </ul>
            </div>
          </div>
        </nav>
      );
}