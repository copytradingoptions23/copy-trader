import React from "react"
import image from "../../../../assets/dashboard/camera.png"
import "./Profile.scss"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const Profile = () => {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['user']);
    const [profile, setProfile] = useState(null)

    const url = 'https://copytradingoptions1.herokuapp.com/api/account-service/profile'


    useEffect(() => {
        if (cookies.userToken) {
            console.log("authorized")
        } else {
            navigate('/login')
        }
    }, [cookies])



    useEffect(() => {
        const getProfile = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setProfile(response.data.user)

                })
                .catch((err) => {
                    setProfile(null)
                })
        }

        getProfile()

        console.log(profile)
    }, [])


    return (
        <div className="profile__container">
            <div className="profile__con">
                <div className="profile__box">
                    <div className="profile__head">
                        <img src={image} alt="" />
                    </div>
                    <div className="profile__infos">
                        <div className="profile__info even">
                            <p className="profile__p1">EMAIL</p>
                            <p className="profile__p2">{profile?.email}</p>
                        </div>

                        <div className="profile__info odd">
                            <p className="profile__p1">MOBILE NUMBER</p>
                            <p className="profile__p2">{profile?.mobileNumber}</p>
                        </div>

                        <div className="profile__info even">
                            <p className="profile__p1">FIRST NAME</p>
                            <p className="profile__p2">{profile?.firstName}</p>
                        </div>

                        <div className="profile__info odd">
                            <p className="profile__p1">LAST NAME</p>
                            <p className="profile__p2">{profile?.lastName}</p>
                        </div>

                        <div className="profile__info even">
                            <p className="profile__p1">STREET ADDRESS</p>
                            <p className="profile__p2">{profile?.streetAddress}</p>
                        </div>

                        <div className="profile__info odd">
                            <p className="profile__p1">POST CODE</p>
                            <p className="profile__p2">{profile?.postCode}</p>
                        </div>

                        <div className="profile__info even">
                            <p className="profile__p1">CITY</p>
                            <p className="profile__p2">{profile?.city}</p>
                        </div>

                        <div className="profile__info odd">
                            <p className="profile__p1">STATE</p>
                            <p className="profile__p2"> {profile?.state}</p>
                        </div>

                        <div className="profile__info even">
                            <p className="profile__p1">COUNTRY</p>
                            <p className="profile__p2">{profile?.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
