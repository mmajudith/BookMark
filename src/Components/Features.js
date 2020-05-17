import React from 'react'
import illust from '../images/illustration-features-tab-1.svg'
import illust2 from '../images/illustration-features-tab-2.svg'
import illust3 from '../images/illustration-features-tab-3.svg'
import '../Styles/Features.style.scss'

function Features() {

    const InteSearch = () =>{
        document.querySelector('.sim-book').classList.remove('mo')
        document.querySelector('.easy-share').classList.remove('tr')
        document.querySelector('.spe-search').classList.add('tr')
        document.querySelector('.info-one-wrapper').style.display = 'none'
        document.querySelector('.info-three-wrapper').style.display = 'none'
        document.querySelector('.info-two-wrapper').style.display = 'block'
        
    }

    const easySharing = ()=>{
        document.querySelector('.spe-search').classList.remove('tr')
        document.querySelector('.sim-book').classList.remove('mo')
        document.querySelector('.easy-share').classList.add('tr')
        document.querySelector('.info-two-wrapper').style.display = 'none'
        document.querySelector('.info-one-wrapper').style.display = 'none'
        document.querySelector('.info-three-wrapper').style.display = 'block'
    }

    const bookMark = ()=>{
        document.querySelector('.spe-search').classList.remove('tr')
        document.querySelector('.easy-share').classList.remove('tr')
        document.querySelector('.sim-book').classList.add('mo')
        document.querySelector('.info-two-wrapper').style.display = 'none'
        document.querySelector('.info-three-wrapper').style.display = 'none'
        document.querySelector('.info-one-wrapper').style.display = 'block'
    }

  return (
    <div className="features-wrapper">

        <div className="obj">
            <h2>Features</h2>
            <p>
                Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
        </div>

        <div className="search">
            <div className="test">
                <span className="sim-book mo" onClick={bookMark}>Simple Bookmarking</span>
                <span className="spe-search" onClick={InteSearch}>Speedy Searching</span>
                <span className="easy-share" onClick={easySharing}>Easy Sharing</span>
            </div>    
        </div>

        <div className="info-one-wrapper">
            <div className="info-one">
                <div>
                    <img src={illust} alt="illustration-features-1"/>
                </div>
                <div className="info">
                    <h2>Bookmark in one click</h2>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.
                    </p>
                    <button>More Info</button>
                </div>
            </div>
        </div>

        <div className="info-two-wrapper">
            <div className="info-two">
                <div>
                    <img src={illust2} alt="illustration-features-2"/>
                </div>
                <div className="info">
                    <h2>Intelligent search</h2>
                    <p>Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your bookmarks.
                    </p>
                    <button>More Info</button>
                </div>
            </div>
        </div>

        <div className="info-three-wrapper">
            <div className="info-three">
                <div>
                    <img src={illust3} alt="illustration-features-3"/>
                </div>
                <div className="info"> 
                    <h2>Share your bookmarks</h2>
                    <p>Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.
                    </p>
                    <button>More Info</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features
