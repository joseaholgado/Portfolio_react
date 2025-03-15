import React from "react"
import './MoveImage.scss'
import photo from '../../../assets/images/Jose_antonio.jpg'

const MoveImage = () => {
    return (
        <div className="moveImage">
            <div className="moveImage__fancy">
                <img
                    src={photo}
                    alt="PhotoCentral"
                    className="moveImage__central"
                />
                
            </div>
        </div>
    )
}
export default MoveImage