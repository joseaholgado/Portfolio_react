import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import './SocialIcons.scss'  

const SocialIcons = () => {
  return (
    <div className="socialIcons">
    <ul >
      <li>
        <a href="#">
          <i className="fab fa-facebook-f icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-github icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-linkedin-in icon"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fab fa-google-plus-g icon"></i>
        </a>
      </li>
    </ul>
    </div>
  )
}

export default SocialIcons