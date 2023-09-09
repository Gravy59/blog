import { QuoteOfTheDay } from "@/components/quote-of-the-day";

export default function Home() {
  return (
    <main className="flex-1 container mb-8">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        👋🏻 Hey there.
      </h1>
      <p className="text-lg mt-6 text-zinc-600 dark:text-zinc-400">
        Welcome to my humble corner of the internet. Here you can read my
        musings as a student programmer, music enthusiast, creative writer, and{" "}
        <em>explorer of the labyrinth</em>. I like to create things that matter
        to me — including this website.
      </p>
      <QuoteOfTheDay />
    </main>
  );
}
