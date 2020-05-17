import React, { useEffect } from 'react'
import arrow from '../images/icon-arrow.svg'
import { FaChevronUp } from 'react-icons/fa' 
import '../Styles/FreAskQues.style.scss'

function FreAskQues() {

    useEffect(() =>{
        const BmarkEx = document.querySelector('.Bmark-explaned')
        const req = document.querySelector('.req-browser')
        const mobileApp = document.querySelector('.mobile-app')
        const chromium = document.querySelector('.chromium')

        //BookMark toggle
        document.querySelector('.Bookmark-wrapper').addEventListener('click', () =>{
            BmarkEx.classList.toggle('Bmark-explaned')
            BmarkEx.classList.toggle('Bmark-explaned-tog')
        })

        //Request Browser toggle
        document.querySelector('.req-browser-wrapper').addEventListener('click', () =>{
            req.classList.toggle('req-browser')
            req.classList.toggle('req-browser-tog')
        })
        
        //Mobile App toggle
        document.querySelector('.mobile-app-wrapper').addEventListener('click', () =>{
            mobileApp.classList.toggle('mobile-app')
            mobileApp.classList.toggle('mobile-app-tog')
        })

        //Chromuim toggle
        document.querySelector('.chromium-wrapper').addEventListener('click', () =>{
            chromium.classList.toggle('chromium')
            chromium.classList.toggle('chromium-tog')
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

            <div className="Bookmark-wrapper">
                <div className="Bmark-explaned">
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

            <div className="req-browser-wrapper">
                <div className="req-browser">
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

            <div className="mobile-app-wrapper">
                <div className="mobile-app">
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

            <div className="chromium-wrapper">
                <div className="chromium">
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
