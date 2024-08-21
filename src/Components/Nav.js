import { useState } from "react";

function Nav(prop) {
    const [inp,setInp]=useState("");
    let setQuery = prop.setQuery;
    function searchBarHandler(que) {
        setQuery(que);
    }
    function clickHandler(que) {
        setInp("");
        setQuery(que);
    }
    function handleChange(event){
        setInp("");
        setQuery(event.target.value);
    }
    function setData(event){
        setInp(event.target.value);
    }
    function reload() {
        window.location.reload();
        setInp("");
    }
    return (
        <div className="nav-parent">
            <div className="main-nav container flex">
                <a href="#" onClick={reload} className="company-logo">
                    <h2><i>// DAILY NEWS //</i></h2>
                </a>
                <div className="nav-links">
                    <ul className="flex">
                        <li className="hover-link nav-item" id="politics" onClick={() => clickHandler("Politics")} >Politics</li>
                        <li className="hover-link nav-item" id="finance" onClick={() => clickHandler("Finance")}>Finance</li>
                        <li className="hover-link nav-item" id="tech" onClick={() => clickHandler("Tech")}>Tech</li>
                    </ul>
                </div>
                <div className="search-bar flex">
                    <select onChange={handleChange}>
                        <option value="" disabled>Select</option>
                        <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                        <option value="LIFESTYLE">LIFESTYLE</option>
                        <option value="EDUCATION">EDUCATION</option>
                        <option value="FESTIVALS">FESTIVALS</option>
                        <option value="SECURITY">SECURITY</option>
                        <option value="CULTURE">CULTURE</option>
                        <option value="SOCIETY">SOCIETY</option>
                    </select>
                    <input id="search-text" type="text" className="news-input" placeholder="e.g. Science" onChange={setData} value={inp} />
                    <button id="search-button" className="search-button" onClick={()=>searchBarHandler(inp)} >Search</button>
                </div>
            </div>

        </div>
    )
}

export default Nav;