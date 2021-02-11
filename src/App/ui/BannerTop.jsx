import React from 'react';
import '../css/BannerTop.css';


export function BannerTop({ page }) {

    return <header>
        <div className="container-fluid p-0">
            <div className="row justify-content-center align-items-center bg-blue m-0 py-1">
                <div className="col-10 d-block d-md-flex align-items-center">
                    <div><h2 className="text-white text-center py-1 mb-3 mb-md-0"><a href="/" className="title">DEMO Streaming</a></h2></div>
                    <div className="ml-md-auto">
                        <span className="pointer text-light h-100 mr-md-5 ml-4">Log in </span>
                        <span className="pointer text-light bg-dark p-2 px-3 ml-3 ml-md-0">Start your free trial</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center bg-dark m-0">
            <div className="col-10">
                <h2 className="text-light text-center text-md-left py-1">Popular {page}</h2>
            </div>
        </div>
    </header>
}