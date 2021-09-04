import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ReadNow(props) {
    const [news, setNews] = useState([]);

    let query = `
        query{
            readNow{
                _id,
                newsDescription,
                newsHeading,
                newsImage,
            }
        }
    `
    useEffect(() => {
        axios.get(`http://localhost:8080/readNews?query=${query}`)
            .then(res => {
                setNews(res.data.data.readNow)
                console.log(res.data.data.readNow[0].newsImage)
            })
            .catch(err => alert(err))
    }, [])
    return (
        <div className="container">
            <div className="row" style={{ padding: '10px', width: 'inherit' }}>

                {
                    news.map(data =>
                        
                        <div className="card" key={data._id} style={{ height: '500px', width: '350px' }} >
                            <img src={data.newsImage} className="card-img-top" alt="..." height="200px" width="200px" />

                            {/* <div className="card-header">
                                {data.newsHeading}
                            </div>
                            <div className="card-body">
                                <p className="card-text">{data.newsDescription}</p>
                            </div> */}
                            <div className="card-body">
                                <h5 className="card-title news-title">{data.newsHeading}</h5>
                                <p className="card-text">{data.newsDescription}</p>
                            </div>
                        </div>
                    )}

            </div>
        </div >
    );
}

export default ReadNow;