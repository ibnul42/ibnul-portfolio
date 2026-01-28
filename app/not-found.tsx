import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
        OOPS!
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Go back home
      </Link>
    </main>
  );
}
