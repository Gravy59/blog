import { getCollection, type CollectionEntry } from "astro:content";
import { ImageResponse } from "@vercel/og";
import { generateColors } from "../../../components/utils";

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<"writing"> };
}
export async function GET({ props }: Props) {
  const properties = generateColors(props.post.id, [
    "#0A0310",
    "#49007E",
    "#FF005B",
    "#FF7D10",
    "#FFB238",
  ]);
  return new ImageResponse(
    {
      type: "svg",
      props: {
        width: 1200,
        height: 630,
        viewBox: "0 0 800 400",
        fill: "none",
        children: [
          {
            type: "g",
            props: {
              children: [
                {
                  type: "rect",
                  props: {
                    width: 800,
                    height: 400,
                    fill: properties[0]?.color,
                  },
                },
                {
                  type: "path",
                  props: {
                    filter: `url(#filter_${props.post.id})`,
                    d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",
                    fill: properties[1]?.color,
                    transform: `translate(${(properties[1]?.translateX ?? 1) * 5} ${(properties[1]?.translateY ?? 1) * 2.5}) rotate(${properties[1]?.rotate} 400 200) scale(${(properties[2]?.scale ?? 1) * 9})`,
                  },
                },
                {
                  type: "path",
                  props: {
                    style: { mixBlendMode: "overlay" },
                    filter: `url(#filter_${props.post.id})`,
                    d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",
                    fill: properties[2]?.color,
                    transform: `translate(${(properties[2]?.translateX ?? 1) * 5} ${(properties[2]?.translateY ?? 1) * 2.5}) rotate(${properties[2]?.rotate} 400 200) scale(${(properties[2]?.scale ?? 1) * 9})`,
                  },
                },
              ],
            },
          },
          {
            type: "defs",
            props: {
              children: [
                {
                  type: "filter",
                  props: {
                    id: `filter_${props.post.id}`,
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB",
                    children: [
                      {
                        type: "feFlood",
                        props: {
                          "flood-opacity": 0,
                          result: "BackgroundImageFix",
                        },
                      },

                      {
                        type: "feBlend",
                        props: {
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape",
                        },
                      },
                      {
                        type: "feGaussianBlur",
                        props: {
                          stdDeviation: 7,
                          result: "effect1_foregroundBlur",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 },
  );
}
export async function getStaticPaths() {
  const blogPosts = await getCollection("writing");
  return blogPosts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}
