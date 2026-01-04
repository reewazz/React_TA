import React, { useEffect, useState } from "react";

const NewsForm = () => {
  const [newsList, setNewsList] = useState([]);

  const [news, setNews] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    author: "",
  });

  // const handleSubmit = ()=> {

  // }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(news);

//    setNewsList(prev => 
//     [...prev, news])
//     console.log(newsList, "check newslist");

//     const refinedNews = JSON.stringify(newsList);

//     localStorage.setItem("newsList", refinedNews);
//     setNews({
//       title: "",
//       image: "",
//       description: "",
//       category: "",
//       author: "",
//     });
//   }
function handleSubmit(e) {
  e.preventDefault();

  setNewsList(prev => {
    const updated = [...prev, news];
    localStorage.setItem("news", JSON.stringify(updated));
    return updated;
  });

  setNews({
    title: "",
    image: "",
    description: "",
    category: "",
    author: "",
  });
}


  return (
    <div style={{ padding: "16px 64px", width: "50%" }}>
      <h1>Create News</h1>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            margin: "10px 0",
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={news.title}
            onChange={(e) => setNews({ ...news, title: e.target.value })}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            margin: "10px 0",
          }}
        >
          <label htmlFor="image">Image</label>
          <input
            name="image"
            type="text"
            value={news.image}
            onChange={(e) => setNews({ ...news, image: e.target.value })}
            required
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            margin: "10px 0",
          }}
        >
          <label htmlFor="category">Category</label>
          <input
            name="category"
            type="text"
            value={news.category}
            onChange={(e) => setNews({ ...news, category: e.target.value })}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            margin: "10px 0",
          }}
        >
          <label htmlFor="author">Author</label>
          <input
            name="author"
            type="text"
            value={news.author}
            onChange={(e) => setNews({ ...news, author: e.target.value })}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            margin: "10px 0",
          }}
        >
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={8}
            value={news.description}
            onChange={(e) => setNews({ ...news, description: e.target.value })}
            required
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default NewsForm;
