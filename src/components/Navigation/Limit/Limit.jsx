import React, { useState } from 'react'

import { setLimit } from '../../../slices/mainSlice';
import { useDispatch } from 'react-redux';

import './Limit.scss'

const Limit = () => {
    const [limits, setLimits] = useState([10, 20, 50]);

    const dispatch = useDispatch();

    const handleSetLimit = (e) => {
        let index = e.target.selectedIndex;

        dispatch(setLimit(limits[index]))
    }

    return (
        <div className='limit'>
            <select onChange={e => handleSetLimit(e)} className='limit__select'>
                {
                    limits.map((limit, i) => {
                        return (
                            <option className='limit__select-option' key={i} value={limit}>{limit}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Limit