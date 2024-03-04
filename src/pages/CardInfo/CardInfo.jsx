import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import './CardInfo.scss'

const CardInfo = () => {

    const { props } = useSelector(state => state.cardInfo)

    return (
        <div className='cardInfo'>
            <div className="cardInfo__inner">
                <h1 className='cardInfo__name'>
                    <span className='cardInfo__label'>Name:</span> {props.author_name}
                </h1>
                <a className="cardInfo__repository" href={props.repository_url}>
                    <span className='cardInfo__label'>Repository link:</span>
                    {props.repository_name}
                </a>
                <p className='cardInfo__date'>
                    <span className='cardInfo__label'>publeshed at:</span>  {props.pushed_at}
                </p>

                <h2 className="cardInfo__topics-title">Topics:</h2>
                <ul className="cardInfo__topics">
                    {props.topics?.map(topic => {
                        return (
                            <li className='cardInfo__topics-item'>{topic}</li>
                        )
                    })}
                </ul>
            </div>

            <img className='cardInfo__img' src={props.pfile_img_url} alt="" />
        </div>
    )
}

export default CardInfo