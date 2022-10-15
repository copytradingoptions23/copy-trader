import React from 'react'
import { useState } from 'react'
import { MdAddCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import InsideNav from '../../Dashboard/Deposit/InsideNav/InsideNav'
import './PlanForm.scss'

const PlanAdd = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [comment, setComment] = useState("")

    return (
        <>
            <InsideNav heading="Add Plan" />
            <div className='planform-con'>
                <form className='plan-form'>
                    <label for="username">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} className='plan-input' type="text" required id="username" />

                    <label for="username">Price Min</label>
                    <input onChange={(e) => setMinPrice(e.target.value)} className='plan-input' type="text" required id="username" />

                    <label for="username">Price Max</label>
                    <input onChange={(e) => setMaxPrice(e.target.value)} className='plan-input' type="text" required id="username" />

                    <label for="username">Comment</label>
                    <input onChange={(e) => setComment(e.target.value)} className='plan-input' required type="text" id="username" />

                    <button className='plan-btn'>Submit</button>

                </form>
                <div className="adminadd-btn" onClick={() => navigate("/admin/plans/add")}>
                    <MdAddCircle />
                </div>
            </div>
        </>
    )
}

export default PlanAdd