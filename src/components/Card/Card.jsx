import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteElementById } from '../../slices/mainSlice'


import { setProps } from '../../slices/cardInfoSlice'

import pencil from '../../assets/images/pencil.png'

import './Card.scss'

const Card = (props) => {

    const { data } = useSelector(state => state.main)

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('');

    const dispatch = useDispatch()

    const onSetProps = () => {
        dispatch(setProps(props))
    }

    const writeComment = () => {
        let newArr = []
        if (comment) {
            newArr.push(comment);
            setComments([...comments, ...newArr])
        }

    }

    const deleteUser = () => {
        console.log(props.index);
        dispatch(deleteElementById(props.index));
    }

    return (
        <div className='card' onClick={onSetProps}>
            <div className="card__inner">
                <button onClick={() => deleteUser()}>x</button>
                <div className="card__head">
                    <a className='card__name' href={props.repository_url}>{props.repository_name}</a>
                    <Link className='card__more' to={`/CardInfo`}>подробнее</Link>
                </div>
                <a className="card__profile" href={props.profile_url}>
                    <img className="card__profile-img" src={props.pfile_img_url} alt="" />
                    <span className="card__profile-name">{props.author_name}</span>
                </a>
                <div className="card__rates">
                    <a className="card__rates-favorites" href="#">{props.stars}</a>
                    <a className="card__rates-watches" href="#">{props.watches}</a>
                </div>

            </div>
            <form className="card__comment" onSubmit={e => e.preventDefault()}>
                <div className="card__comment-inner">
                    <input
                        className="card__comment-input"
                        type="text"
                        placeholder='Комментарий к проекту'
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className='card__comment-btn' onClick={() => writeComment()}>
                        <img className='card__comment-img' src={pencil} alt="" />
                    </button>
                </div>
            </form>
            <ul className='card__comments-list'>
                {comments.map(el => {
                    return (
                        <li className='card__comment-item'>you: {el}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Card