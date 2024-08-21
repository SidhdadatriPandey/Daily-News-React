import Card from "./Card";
function Cards(prop){
    let cards=prop.cards;
    return(
        <div className="cards-container container flex" id="cards-container">
            {
                cards.map((data,Index)=>{
                    return data.urlToImage&&<Card key={Index} data={data}/>
                })
            }
        </div>
    )
}

export default Cards;