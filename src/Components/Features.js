import React, { useRef } from 'react' 
import illust from '../images/illustration-features-tab-1.svg'
import illust2 from '../images/illustration-features-tab-2.svg'
import illust3 from '../images/illustration-features-tab-3.svg'
import '../Styles/Features.style.scss'

function Features() {

    const simBookRef = useRef(null)
    const easyShareRef = useRef(null)
    const speSearchRef = useRef(null)

    const infoOneRef = useRef(null)
    const infoTwoRef = useRef(null)
    const infoThreeRef = useRef(null)

    const InteSearch = () =>{
        simBookRef.current.classList.remove('mo')
        easyShareRef.current.classList.remove('tr')
        speSearchRef.current.classList.add('tr')
        
        infoOneRef.current.style.display = 'none'
        infoThreeRef.current.style.display = 'none'
        infoTwoRef.current.style.display = 'block'
        
    }

    const easySharing = ()=>{
        speSearchRef.current.classList.remove('tr')
        simBookRef.current.classList.remove('mo')
        easyShareRef.current.classList.add('tr')

        infoOneRef.current.style.display = 'none'
        infoTwoRef.current.style.display = 'none'
        infoThreeRef.current.style.display = 'block'
    
    }

    const bookMark = ()=>{
        speSearchRef.current.classList.remove('tr')
        simBookRef.current.classList.add('mo')
        easyShareRef.current.classList.remove('tr')

        infoTwoRef.current.style.display = 'none'
        infoThreeRef.current.style.display = 'none'
        infoOneRef.current.style.display = 'block'
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
            <div className="search-one">
                <span ref={simBookRef} className="sim-book mo" onClick={bookMark}>Simple Bookmarking</span>
            </div>  
            <div className="search-two">
                <span ref={speSearchRef}className="spe-search" onClick={InteSearch}>Speedy Searching</span>
            </div>
            <div className="search-three">
                <span ref={easyShareRef}className="easy-share" onClick={easySharing}>Easy Sharing</span>
            </div> 
        </div>

        <div ref={infoOneRef} className="info-one-wrapper">
            <div className="info-one">
                <div>
                    <img src={illust} alt="illustration-features-1" className="illust"/>
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

        <div ref={infoTwoRef} className="info-two-wrapper">
            <div className="info-two">
                <div>
                    <img src={illust2} alt="illustration-features-2" className="illust"/>
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

        <div ref={infoThreeRef} className="info-three-wrapper">
            <div className="info-three">
                <div>
                    <img src={illust3} alt="illustration-features-3" className="illust"/>
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
