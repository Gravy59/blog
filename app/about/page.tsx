import { ArticleShell } from "@/components/shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  openGraph: {
    title: "About Me",
  },
  twitter: {
    title: "About Me",
  },
};

export default function About() {
  return (
    <ArticleShell
      title="About Me"
      pubDate={new Date("Aug 01 2023")}
      image={{
        src: "/about.webp",
        alt: "A cyborg bird flying, generated with Stable Diffusion and Real-ESRGAN",
      }}
    >
      <p className="lead">Hey there. 👋🏻</p>
      <p>
        I&rsquo;m Gravy, a web developer and enthusiastic student with a love
        for solving the puzzles of the digital world. But that&rsquo;s not all
        that defines me — I&rsquo;m also a passionate creative writer, hiker,
        and pianist. My goal in life is to <em>explore the labyrinth</em> — to
        discover the mysteries and wonders God has to offer while welcoming the
        unknown.
      </p>
    </ArticleShell>
  );
}
