// File routes export a get() function, which gets called to generate the file.
// Return an object with `body` to save the file contents in your final build.
export async function get() {
  const allPosts = import.meta.globEager("./blog/posts/*.md"); // Vite
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
  return {
    body: JSON.stringify(posts),
  };
}
