import "./Card.css";

import { useEffect, useState } from "react";

const Card = () => {

    const [advice, setAdvice] = useState("");
    function fetchData() {
        fetch("https://api.adviceslip.com/advice")
            .then(response => {
                return response.json();
            })
            .then(data => {
                let newAdvice = data.slip;
                setAdvice(newAdvice);
            })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <div className="card">
                <h1 className="advice-id">Advice #{advice.id}</h1>
                <p className="advice"><q>{advice.advice}</q></p>
                <img className="desktop-divider" src="pattern-divider-desktop.svg" alt="Divider" />
                <img className="mobile-divider" src="pattern-divider-mobile.svg" alt="Divider" />
                <div className="btn-container">
                    <button className="btn" onClick={fetchData}></button>
                </div>
            </div>
        </div>
    );
}

export default Card;