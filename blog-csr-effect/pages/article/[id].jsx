import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      const response = await fetch(`http://localhost:5000/posts/${id}`);
      const article = await response.json();
      setArticle(article);
    };

    fetchArticleDetails();
  }, [id]);

  return (
    <div className="p-24">
      <Head>
        <title>{article?.title}</title>
      </Head>
      <article className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{article?.title}</h1>
          <Link href={"/"} className="hover:text-blue-600">
            &larr; back
          </Link>
        </div>
        <p>Published on {article?.date}</p>
        <hr />
        <p>{article?.content}</p>
      </article>
    </div>
  );
};

export default ArticleDetail;
