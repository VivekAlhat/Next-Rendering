import Link from "next/link";
import Head from "next/head";

const ArticleDetail = ({ article }) => {
  return (
    <>
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
    </>
  );
};

export default ArticleDetail;

export async function getServerSideProps(context) {
  const articleId = context.params.id;
  const response = await fetch(`http://localhost:5000/posts/${articleId}`);
  const article = await response.json();

  return {
    props: {
      article,
    },
  };
}
