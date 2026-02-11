'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div className="error">
      <h1>Something went wrong!</h1>
      <p>Please try again later.</p>
      <Link href="/meals" className="mb-4 text-blue-600 hover:underline">
        Try again
      </Link>
    </div>
  );
}
