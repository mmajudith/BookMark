import React from 'react'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import '../Styles/DownloadEx.style.scss'

function DownloadEx() {
  return (
    <div className="downloads-wrapper">

        <div className="download-text">
            <h2>Download the extension</h2>
            <p>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </p>
        </div>

        <div className="extensions-wrapper">

            <div className="chrome-ex">
                <div className="browser-logo">
                    <img src={chrome} alt="chrome-logo"/>
                </div>
                <div>
                    <h3>Add to Chrome</h3>
                    <p>Minimum version 62</p>
                    <div className="btn-add">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
            </div>

            <div className="firefox-ex">
                <div className="browser-logo">
                    <img src={firefox} alt="firefox-logo"/>
                </div>
                <div>
                    <h3>Add to Firefox</h3>
                    <p>Minimum version 55</p>
                    <div className="btn-add">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
            </div>

            <div className="opera-ex">
                <div className="browser-logo">
                    <img src={opera} alt="opera-logo"/>
                </div>
                <div>
                    <h3>Add to Opera</h3>
                    <p>Minimum version 46</p>
                    <div className="btn-add">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadEx
