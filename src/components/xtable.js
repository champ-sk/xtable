import { useState } from "react";

export default function XTable() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setData(sortedData);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Date and Views Table</h1>
      <div className="mb-4 flex gap-2">
        <button onClick={sortByDate} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Sort by Date
        </button>
        <button onClick={sortByViews} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Sort by Views
        </button>
      </div>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Views</th>
            <th className="border border-gray-400 px-4 py-2">Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="border border-gray-400 px-4 py-2">{item.date}</td>
              <td className="border border-gray-400 px-4 py-2">{item.views}</td>
              <td className="border border-gray-400 px-4 py-2">{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
