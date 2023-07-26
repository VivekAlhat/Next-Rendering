import Head from "next/head";
import Article from "@/components/Article";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:5000/posts");
      const articles = await response.json();
      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-12">
      <Head>
        <title>John Doe</title>
      </Head>
      <div className="space-y-4">
        <div className="grid place-items-center h-32 w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto">
          <h1 className="text-2xl font-bold">John Doe</h1>
        </div>
        <p className="text-gray-700 text-center">
          Welcome to my digital space where I share my thoughts.
        </p>
      </div>
      <section className="my-8 space-y-12">
        {articles?.map((article, idx) => (
          <Article key={idx} article={article} id={idx} />
        ))}
      </section>
    </div>
  );
}
