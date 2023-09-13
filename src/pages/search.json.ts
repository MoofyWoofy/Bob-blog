import { MarkdownInstance } from "astro";
import { Frontmatter } from "src/misc";

export async function GET() {
  const allPosts = import.meta.glob<MarkdownInstance<Frontmatter>>("./blog/articles/*.md", { eager: true }); // Vite
  const posts = Object.values(allPosts)
    .filter((ele) => ele.frontmatter.draft != true)
    .map((ele) => {
      return {
        title: ele.frontmatter.title,
        url: ele.url,
        description: ele.frontmatter.description,
        tags: ele.frontmatter.tags,
      };
    });
  return new Response(JSON.stringify(posts));
}
