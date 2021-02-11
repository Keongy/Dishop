import React from 'react'
import { BannerTop } from './ui/BannerTop'
import { Footer } from './ui/Footer'
import Placeholder from "./assets/placeholder.png";
import './css/Home.css'


export function Home() {
    return <div className="d-flex min-vh-100 flex-column">
        <BannerTop page={'Titles'} />
        <div className="container flex-grow-1">
            <div className="row justify-content-center justify-content-lg-start mt-5">
                <div className="col-auto">
                    <a href="/series" className="label">
                        <div className="placeholder" >
                            <img src={Placeholder} alt="Popular series" className="logo-placeholder" />
                            <p className="title-placeholder text-light">SERIES</p>
                        </div>
                        <p>Popular series</p>
                    </a>
                </div>
                <div className="col-auto">
                    <a href="/movies" className="label" >
                        <div className="placeholder">
                            <img src={Placeholder} alt="Popular series" className="logo-placeholder" />
                            <p className="title-placeholder text-light">MOVIES</p>
                        </div>
                        <p>Popular Movies</p>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

