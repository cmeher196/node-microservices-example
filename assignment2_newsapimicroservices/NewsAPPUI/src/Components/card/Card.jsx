import React from 'react';

function Card(props) {
    console.log(props.urlToImage)
    const show = data => {
        props.readLater(data);
    }
    return (
        <div className="card" style={{height:'450px', width:'265px'}}>
            <img src={props.urlToImage} className="card-img-top" alt="..." height="200px" width="200px" />
            <div className="card-body">
                <h5 className="card-title news-title">{props.author}</h5>
                <p className="card-text">{props.title}</p>
                <button className="btn btn-primary read-later" onClick={() => show(props.title)}>Read later</button>
            </div>
        </div>
    );

}

export default Card;