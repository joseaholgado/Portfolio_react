import React, {useState} from "react"
import "./CardExperience.scss"
import {dataExperience} from "./DataExperience" 


const CardExperience = () => {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    let hasPrev= index> 0
    let hasNext=index< dataExperience.length - 1

    function handlePrevClick() {
        if (hasPrev) {
          setIndex(index - 1);
        }
      }
    
    function handleNextClick() {
        if (hasNext) {
          setIndex(index + 1);
        }
      }

    function handleMoreClick() {
        setShowMore(!showMore);
      }
    
    let card = dataExperience[index]

    return (
        <div className="cardExperience">
            <h2>
              <i>{card.title}</i>
            </h2>
            <div className="cardExperience-buttons">
              <button
                  onClick={handlePrevClick}
                  disabled={!hasPrev}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <img src={card.image}></img>
              <button 
                  onClick={handleNextClick}
                  disabled={!hasNext}
              >
                  <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <button onClick={handleMoreClick}>
                 {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{card.text}</p>}
        </div>
    )
}



export default CardExperience