import React, { useEffect, useState } from 'react'
import { NewsCard } from './NewsCard';

const News = () => {
     const news = [
  {
    source: {
      id: null,
      name: "Gizmodo.com"
    },
    author: "Mike Pearl",
    title: "Apple Is Hemorrhaging Vice Presidents",
    description:
      "Amid rumors that Tim Cook may leave soon, many of his direct reports are retiring or otherwise moving on.",
    url: "https://gizmodo.com/apple-is-hemorrhaging-vice-presidents-2000696487",
    urlToImage:
      "https://gizmodo.com/app/uploads/2025/12/tim-cook-1200x675.jpg",
    publishedAt: "2025-12-06T20:30:48Z",
    content:
      "On Saturday came a report from Bloomberg’s Mark Gurman that Johny Srouji, Apple’s senior vice president of hardware technology is looking to leave..."
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge"
    },
    author: "Emma Roth",
    title: "Apple Music Replay 2025 is back with new listening stats",
    description:
      "Apple Music is getting ahead of Spotify Wrapped with the launch of its yearly recaps.",
    url:
      "https://www.theverge.com/news/836613/apple-music-replay-2025-listening-stats-launch",
    urlToImage:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/Replay-25.png",
    publishedAt: "2025-12-02T16:48:11Z",
    content:
      "You can check out all the new artists you listened to this year..."
  },
    {
    source: {
      id: "the-verge",
      name: "The Verge"
    },
    author: "Emma Roth",
    title: "Apple Music Replay 2025 is back with new listening stats",
    description:
      "Apple Music is getting ahead of Spotify Wrapped with the launch of its yearly recaps.",
    url:
      "https://www.theverge.com/news/836613/apple-music-replay-2025-listening-stats-launch",
    urlToImage:
      "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/Replay-25.png",
    publishedAt: "2025-12-02T16:48:11Z",
    content:
      "You can check out all the new artists you listened to this year..."
  }
];
const [myArticles,setMyArticles] = useState([])
const [query,setQuery] = useState("apple")
const [category,setCategory] = useState("technology")

const fetchArticles = async ()=> {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=0ea95d274ed24da2b72950537e16028d`)
console.log("it is running again")
    // const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&from=2025-11-30&sortBy=publishedAt&apiKey=0ea95d274ed24da2b72950537e16028d`)
//  console.log(response,"response")
    const data = await response.json()
setMyArticles(data.articles)
}


useEffect(()=>{
fetchArticles()
},[category,query])


  return (
    <>
        <button onClick={()=>fetchArticles()}>fetch news</button>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <div style={{display:"flex"}}>
            <button onClick={()=>setCategory("sports")}>sports</button>
            <button onClick={()=>setCategory("crypto")}>crypto</button>
            <button onClick={()=>setCategory("politics")}>politics</button>
        </div>
    <div className='news'>
        {myArticles.map((item,index)=>(

        <NewsCard key={index} value={item}/>
        ))}
    </div>
    </>
  )
}

export default News