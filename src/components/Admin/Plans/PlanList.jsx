import React from 'react'
import './PlanList.scss'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import axios from 'axios'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useState } from 'react'

const PlanList = () => {
    const navigate = useNavigate()

    const [planList, setPlanList] = useState(null)
    const [cookies, setCookie] = useCookies(['user']);

    const url = 'https://copytradingoptions1.herokuapp.com/api/deposits'

    useEffect(() => {
        const getPlanList = async () => {
            await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
                .then(function (response) {
                    console.log(response)
                    setPlanList(response.data.deposits)

                })
                .catch((err) => {
                    setPlanList(null)
                })
        }

        getPlanList()

        console.log(planList)
    }, [])

    return (
        <>
            <InsideNav heading="Plan List" />
            <div className='planlist-con'>
                <div className="planlist-card-con">
                    <div className="planlist-card" onClick={() => navigate("/admin/plans/update")}>
                        <div className="planlist-text">
                            <p>Trading BRONZE PACKAGE Plan</p>
                            <p>1000 - 10000</p>
                        </div>
                    </div>
                    <div className="planlist-card" onClick={() => navigate("/admin/plans/update")}>
                        <div className="planlist-text">
                            <p>Trading BRONZE PACKAGE Plan</p>
                            <p>1000 - 10000</p>
                        </div>
                    </div>
                    <div className="planlist-card" onClick={() => navigate("/admin/plans/update")}>
                        <div className="planlist-text">
                            <p>Trading BRONZE PACKAGE Plan</p>
                            <p>1000 - 10000</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PlanList