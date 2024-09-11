import React from "react"
import './MoveImage.scss'
import photo from '../../../assets/images/Jose_antonio.jpg'

const MoveImage = () => {
    return (
        <div className="moveImage">
            {/* Imagen central */}
            <img
                src={photo}
                alt="PhotoCentral"
                className="moveImage__central"
            />
            
        </div>
    )
}
export default MoveImage