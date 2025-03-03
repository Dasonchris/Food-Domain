import React from 'react'
import { assets } from '../../assets/assets'
import "./AppDownload.css"

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        delectus totam vero facilis distinctio libero!
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload