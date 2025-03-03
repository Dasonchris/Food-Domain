import React from 'react'
import { assets } from '../../assets/assets'
import "./AppDownload.css"

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p style={{color:"white"}}>
        Download our app for the best food ordering experience. Get exclusive deals
        and instant updates on your favorite restaurants' meals.
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload