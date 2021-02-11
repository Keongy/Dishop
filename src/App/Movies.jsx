import React, { useEffect, useState } from 'react'
import { BannerTop } from './ui/BannerTop'
import { Footer } from './ui/Footer'
import './css/Series.css'
import { Loader } from './ui/Loader'
import { Error } from './ui/Error'



export function Movies() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        (async function () {
            const response = require('./feed/sample.json')

            if (response) {
                var tmps = response.entries
                tmps = tmps.filter(tmp => tmp.releaseYear >= 2010)
                tmps = tmps.filter(tmp => tmp.programType === 'movie')
                tmps = tmps.splice(0, 21)
                tmps = tmps.sort(function compare(a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase())
                        return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase())
                        return 1;
                    return 0;
                })
                setData(data => tmps)
            } else {
                setError(true)
            }
        })()
    }, [])


    function onLoading() {
        setLoading(false)
    }

    return <div className="d-flex min-vh-100 flex-column">
        <BannerTop page={'Movies'} />
        <div className="container-fluid flex-grow-1">
            <div className="row justify-content-center">
                <div className="col-10">
                    {error ? <Error /> :
                        <ul className="row justify-content-around">
                            {data.map(i =>
                                <li key={i.title + Math.random()} className="px-0" data-toggle="tooltip" data-placement="bottom" title={i.title}>
                                    <div className="loader">{loading ? <Loader /> : null}</div>
                                    <img onLoad={onLoading} src={i.images["Poster Art"].url} alt="affiche" className="mt-4" />
                                    <p className="overflow-ellipsis" >{i.title}</p>
                                </li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        </div>
        <Footer />
    </div>

}
