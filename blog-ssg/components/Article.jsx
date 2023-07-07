import Link from "next/link";
import { getArticlePreview } from "@/utils/helper";

const Article = ({ article }) => {
  const { title, date, content, id } = article;
  return (
    <article className="border border-gray-300 rounded-md p-4 space-y-1 cursor-pointer">
      <Link href={`/article/${id}`}>
        <h3 className="font-semibold text-xl hover:text-blue-600">{title}</h3>
      </Link>
      <p className="text-gray-600">{date}</p>
      <p>{getArticlePreview(content)}&nbsp;...</p>
    </article>
  );
};

export default Article;
