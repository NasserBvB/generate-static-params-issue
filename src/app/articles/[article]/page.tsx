type Article = {
  title: string;
  content: string;
};

type PageProps = {
  params: Record<string, string>;
};

const mockArticles = async () => {
  return new Promise<Article[]>((resolve) => {
    resolve([]);
  });
};

const mockSingleArticle = async (slug: string) => {
  return new Promise<Article>((resolve) => {
    resolve({ title: slug, content: "Hello World" });
  });
};

export async function generateStaticParams() {
  const posts = await mockArticles();

  return posts.map((post) => ({
    slug: post.title,
  }));
}

export default async function Page({ params: { article } }: PageProps) {
  const articleData = await mockSingleArticle(article);
  return <h1>{articleData.content}</h1>;
}
