import React, { useEffect, useState } from 'react';
import News from '../News/News';



const TopHeadline = () => {
    const [articles, setArticles] = useState ([ ]);
    useEffect ( () => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-04&sortBy=publishedAt&apiKey=57b69a127d8a457e8b68b890c6e5f55a'
        fetch (url)
        .then (res => res.json ())
        .then (data => setArticles(data.articles) )
    }, [])
    return (
        <div>
            <h1> Top Headlines : {articles.length} </h1>
            {
                articles.map(article => <News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;