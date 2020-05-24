import React, { useEffect, useRef } from 'react'
import arrow from '../images/icon-arrow.svg'
import { FaChevronUp } from 'react-icons/fa' 
import '../Styles/FreAskQues.style.scss'

function FreAskQues() {

    const bMarkRef = useRef(null)
    const reqRef = useRef(null)
    const mobileAppRef = useRef(null)
    const chromiumRef = useRef(null)

    const bookMarkConRef = useRef(null)
    const reqBrowserConRef = useRef(null)
    const mobileAppConRef = useRef(null)
    const chromiumConRef = useRef(null)

    useEffect(() =>{

        //BookMark toggle
        bookMarkConRef.current.addEventListener('click', () =>{
            bMarkRef.current.classList.toggle('Bmark-explaned')
            bMarkRef.current.classList.toggle('Bmark-explaned-tog')
        })

        //Request Browser toggle
        reqBrowserConRef.current.addEventListener('click', () =>{
            reqRef.current.classList.toggle('req-browser')
            reqRef.current.classList.toggle('req-browser-tog')
        })
        
        //Mobile App toggle
        mobileAppConRef.current.addEventListener('click', () =>{
            mobileAppRef.current.classList.toggle('mobile-app')
            mobileAppRef.current.classList.toggle('mobile-app-tog')
        })

        //Chromuim toggle
        chromiumConRef.current.addEventListener('click', () =>{
            chromiumRef.current.classList.toggle('chromium')
            chromiumRef.current.classList.toggle('chromium-tog')
        })
    })

    
  return (
    <div className="fre-ask-que-wrapper">

        <div className="align-center">
            <h2>Frequently Asked Questions</h2>
            <p >
                Here are some of our FAQs. If you have any other questions you’d like 
                answered please feel free to email us.
            </p>
        </div>

        <div className="que-answer-wrapper">

            <div ref={bookMarkConRef} className="Bookmark-wrapper">
                <div ref={bMarkRef} className="Bmark-explaned">
                    <div className="flex">
                        <p className="que">What is Bookmark?</p>
                        <div>
                            <img src={arrow} alt="arrowUp-icon" className="arrowUp"/>
                            <FaChevronUp className="arrowDown"/>
                        </div>
                    </div>
                    <p className="ans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                </div>
            </div>

            <div ref={reqBrowserConRef} className="req-browser-wrapper">
                <div ref={reqRef} className="req-browser">
                    <div className="flex">
                        <p className="que">How can I request a new browser?</p>
                        <div>
                            <img src={arrow} alt="arrow-icon" className="arrowUp"/>
                            <FaChevronUp className="arrowDown"/>
                        </div>
                    </div>
                    <p className="ans">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                </div>
            </div>

            <div ref={mobileAppConRef} className="mobile-app-wrapper">
                <div ref={mobileAppRef} className="mobile-app">
                    <div className="flex">
                        <p className="que"> Is there a mobile app?</p>
                        <div>
                            <img src={arrow} alt="arrow-icon" className="arrowUp"/>
                            <FaChevronUp className="arrowDown"/>
                        </div>
                    </div>
                    <p className="ans">Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                    </p>
                </div>
            </div>

            <div ref={chromiumConRef} className="chromium-wrapper">
                <div ref={chromiumRef} className="chromium">
                    <div className="flex">
                        <p className="que">What about other Chromium browsers?</p>
                        <div>
                            <img src={arrow} alt="arrow-icon" className="arrowUp"/>
                            <FaChevronUp className="arrowDown"/>
                        </div>
                    </div>
                    <p className="ans">Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </p>
                </div>
            </div>

            <div className="info-btn">
                <button>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default FreAskQues
