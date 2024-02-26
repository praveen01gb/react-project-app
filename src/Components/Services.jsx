// import { css } from '@emotion/core'
import React from 'react'
import { ServicesNavbar } from './ServicesNavbar'
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faFile } from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
    return (
          
            <div>
                <ServicesNavbar/>


                <section className="cards">
                <div className="card">
                    <div className="card_content">
                        <FontAwesomeIcon icon={faAnchor}/>
                        <h2>Lorem Ipsum</h2>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                </div>
                <div className="card">
            <div className="card_content">
            <FontAwesomeIcon icon={faFile}/>
                <h2>Lorem Ipsum</h2>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
        <div className="card">
            <div className="card_content">
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <h2>Lorem Ipsum</h2>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
        <div className="card">
            <div className="card_content">
                <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                <h2>Lorem Ipsum</h2>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
        <div className="card">
            <div className="card_content">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                <h2>Lorem Ipsum</h2>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
        <div className="card">
            <div className="card_content">
                <i className="fa fa-anchor" aria-hidden="true"></i>
                <h2>Lorem Ipsum</h2>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
        </div>
    </section>
            </div>
            
    )
}