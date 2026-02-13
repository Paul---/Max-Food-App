import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="text-center">
        <h1>Oops</h1>
        <p>That page or resource was not found.</p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 text-white transition hover:from-orange-600 hover:to-yellow-600"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
