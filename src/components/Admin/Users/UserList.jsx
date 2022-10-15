import React from 'react'
import './UserList.scss'
import { AiTwotoneDelete } from 'react-icons/ai'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const navigate = useNavigate()

    const [userList, setUserList] = useState(null)
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/deposits'

    useEffect(() => {
        const getUser = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setUserList(response.data.deposits)

                })
                .catch((err) => {
                    setUserList(null)
                })
        }

        getUser()

        console.log(userList)
    }, [])

    return (
        <>
            <InsideNav heading="Users List" />
            <div className='userlist-con'>
                <div className="userlist-search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="userlist-card-con">
                    <div className="userlist-card">
                        <div className="userlist-img">
                            <img src="https://protradeoptions.live/uploads/images/1664319566CE58F48A-7F6C-404A-B09D-586541DFE14D.jpeg" alt="" />
                        </div>
                        <div className="userlist-text">
                            <h3>160<span> Hasan</span></h3>
                            <p>United States</p>
                            <p>0 Pending Deposits</p>
                            <p>0 Pending Withdrawals</p>
                        </div>
                        <div className="userlist-btn">
                            <AiTwotoneDelete />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserList