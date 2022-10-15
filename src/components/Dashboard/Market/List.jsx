import React from 'react'
import './List.css'

const List = (props) => {
    return (
        <div className='list__con'>
            <div className="left__list">
                <div className="cur__img">
                    <img src={`${props.img}`} alt="" />
                </div>
                <div className="list__name">
                    <p>{props.name}</p>
                    <p>{props.symbol}</p>
                </div>
            </div>
            <div className="right__list">
                <p>{props.price}</p>
                <p>fgfg</p>
            </div>
        </div>
    )
}

export default List