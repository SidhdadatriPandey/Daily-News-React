function Card(prop){
    let data=prop.data;
    return(
        <div>
            <div className="card">
            <div className="card-header">
                <img src={data.urlToImage} alt="news-image" id="news-img"/>
            </div>
            <div className="card-content">
                <h3 id="news-title"><a href={data.url} target="_blank">{data.title}</a></h3>
                {/* <h6 className="news-source" id="news-source">End Gadget 26/08/2023</h6> */}
                <p className="news-desc" id="news-desc">{data.description}</p>
            </div>
        </div>
        </div>
    )
}

export default Card;