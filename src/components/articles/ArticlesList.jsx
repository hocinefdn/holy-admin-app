import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  return (
    <div className="bg-white flex justify-center">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            Vos articles
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {articles.map((article) => (
            <ArticleCard article={article} key={`article-${article.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
