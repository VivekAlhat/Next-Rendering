import Link from "next/link";
import Head from "next/head";

const ArticleDetail = ({ article }) => {
  return (
    <div className="p-24">
      <Head>
        <title>{article.title}</title>
      </Head>
      <article className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{article.title}</h1>
          <Link href={"/"} className="hover:text-blue-600">
            &larr; back
          </Link>
        </div>
        <p>Published on {article.date}</p>
        <hr />
        <p>{article.content}</p>
      </article>
    </div>
  );
};

export default ArticleDetail;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:5000/posts");
  const articles = await response.json();

  const paths = articles.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:5000/posts/${params.id}`);
  const article = await response.json();

  return {
    props: {
      article,
    },
  };
}
