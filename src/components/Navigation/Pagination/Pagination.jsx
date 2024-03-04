import React, { useEffect } from 'react'

import leftArrow from '../../../assets/images/left-arrow.png'
import rightArrow from '../../../assets/images/right-arrow.png'
import './Pagination.scss'

import { Service } from '../../../service/Service'


const Pagination = () => {

    const { getRepositoryByName } = Service()

    const onPaginate = () => {
        getRepositoryByName(localStorage.getItem(`${localStorage.length}`), 2)
            .then(res => console.log(res))
            .catch(console.error)
    }



    return (
        <div className="navigation__pagination pagination">
            <div className="pagination__inner">
                <a className="pagination__prev pagination__item">
                    <img src={leftArrow} alt="" />
                </a>
                <ul className="pagination-controls">
                    <li className='pagination-controls__item pagination__item'>
                        <a onClick={onPaginate} className="pagination-controls__link" href="#">1</a>
                    </li>
                    <li className='pagination-controls__item pagination__item'>
                        <a className="pagination-controls__link" href="#">2</a>
                    </li>
                    <li className='pagination-controls__item pagination__item'>
                        <a className="pagination-controls__link" href="#">3</a>
                    </li>
                </ul>
                <a className="pagination__next pagination__item">
                    <img src={rightArrow} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Pagination