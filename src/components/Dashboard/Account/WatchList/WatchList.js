import React from "react"
import "./WatchList.scss"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const WatchList = () => {

    const navigate = useNavigate()

    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])

    return (
        <div className="watchlist__con">
            <p>WATCH LIST</p>
        </div>
    )
}

export default WatchList
