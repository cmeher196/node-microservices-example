import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { filterOptions } from "../../config.json";

function DisplayCard(props) {
    const [newsData, setNewsData] = useState([]);
    let url = `http://localhost:8080/news/getAllNews`

    useEffect(() => {
        if (props.location.filteredAPI && props.location.filteredAPI.length > 0) {
            axios.get(props.location.filteredAPI)
                .then(res => {
                    console.log(res.data.articles);
                    let data = res.data.articles;
                    setNewsData(data);
                    console.log('config', filterOptions)
                })
                .catch(err => console.error(err))
        }
        else {
            axios.get(url)
                .then(res => {
                    let data = res.data.articles;
                    setNewsData(data);
                })
                .catch(err => console.error(err))
        }
        // eslint-disable-next-line
    }, [props.location.filteredAPI]);

    const getUserName = () => {
        return sessionStorage.getItem('userName')
    }

    const dataReadLater = (title) => {
        let newsArray = newsData.filter(data => data.title === title);
        console.log(newsArray)
        axios({
            url: `http://localhost:8080/readNews`,
            method: "post",
            data: {
                query: `
                    mutation{
                        readLater(newsInput:{
                            newsHeading : "${newsArray[0].title}",
                            newsImage:"${newsArray[0].urlToImage}",
                            newsDescription :"${newsArray[0].description}",
                            newsAuthor :"${newsArray[0].author}",
                            newsSource : "${newsArray[0].source.name}",
                            newsUser : "${getUserName()}"
                        })
                        {
                            _id,
                            newsHeading,
                            newsAuthor
                        }
                    }
               `
            }
        }).then(res=>{
            if(res.status === 200 || 200){
                alert(`News Added!!`)
            }
        }).catch(err=>alert(err))
    }

    return (
        <div className="container">
            <div className="row">
                {
                    newsData.map(data =>
                        data.author != null ?
                            <div className="col-lg-3 mb-4 display-card" key={data.publishedAt}>
                                <Card
                                    {...data}
                                    readLater={dataReadLater} />
                            </div>
                            : ""
                    )
                }
            </div>
        </div>
    );
}

export default DisplayCard;