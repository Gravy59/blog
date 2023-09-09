import { Image } from "@/components/image";

interface ShellProps {
  children: React.ReactNode;
}

interface ArticalShellProps extends ShellProps {
  title: string;
  image?: {
    src: string;
    alt?: string;
  };
  pubDate: Date;
}

export function Shell({ children }: ShellProps) {
  return <main className="flex-1 container mb-8">{children}</main>;
}

export function ArticleShell({
  children,
  title,
  image,
  pubDate,
}: ArticalShellProps) {
  return (
    <main className="flex-1 container mb-8">
      {image && <Image src={image.src} alt={image.alt} />}
      <article>
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          <time
            dateTime={pubDate.toISOString()}
            className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
          >
            {pubDate.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </header>
        <div className="prose dark:prose-invert mt-8">{children}</div>
      </article>
    </main>
  );
}
