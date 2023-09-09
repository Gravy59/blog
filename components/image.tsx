// https://github.com/rauchg/blog/blob/main/app/(post)/components/image.tsx
import sizeOf from "image-size";
import { join } from "path";
import { readFile } from "fs/promises";
import NextImage from "next/image";

export async function Image({
  src,
  alt,
  width = null,
  height = null,
}: {
  src: string;
  alt?: string;
  width?: number | null;
  height?: number | null;
}) {
  const isDataImage = src.startsWith("data:");
  if (isDataImage) {
    /* eslint-disable @next/next/no-img-element */
    return <img src={src} alt={alt ?? ""} />;
  } else {
    if (width === null || height === null) {
      let imageBuffer: Buffer | null = null;

      if (src.startsWith("http")) {
        imageBuffer = Buffer.from(
          await fetch(src).then((res) => res.arrayBuffer()),
        );
      } else {
        if (
          !process.env.CI &&
          process.env.VERCEL_URL &&
          process.env.NODE_ENV === "production"
        ) {
          imageBuffer = Buffer.from(
            await fetch("https://" + process.env.VERCEL_URL + src).then((res) =>
              res.arrayBuffer(),
            ),
          );
        } else {
          imageBuffer = await readFile(
            new URL(join(import.meta.url, "..", "..", "public", src)).pathname,
          );
        }
      }
      const computedSize = sizeOf(imageBuffer);
      if (
        computedSize.width === undefined ||
        computedSize.height === undefined
      ) {
        throw new Error("Could not compute image size");
      }
      width = computedSize.width;
      height = computedSize.height;
    }

    return (
      <figure className="mb-6">
        <NextImage
          className="rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-600 mb-2"
          width={width}
          height={height}
          alt={alt ?? ""}
          src={src}
        />

        {alt && (
          <figcaption className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  }
}
