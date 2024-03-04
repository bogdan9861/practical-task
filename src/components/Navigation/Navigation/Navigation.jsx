import React from 'react'

import './Navigation.scss'
import Limit from '../Limit/Limit'
import Pagination from '../Pagination/Pagination'

const Navigation = () => {
    return (
        <div className='navigation'>

            <Limit/>
            <Pagination />
        </div>
    )
}

export default Navigation