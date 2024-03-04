import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

import { Service } from '../../service/Service'
import { useHttp } from '../../hooks/useHttp.hook'


import './CardsList.scss'

const CardsList = () => {

    const { data, limit } = useSelector(state => state.main);

    const [localLimit, setLocalLimit] = useState(10)

    const { loading, error } = Service();


    useState(() => {
        setLocalLimit(limit);
    }, [limit])


    const loadingInfo = loading ? <p>loading...</p> : null;
    const errorInfo = error ? <p>oops! there is some error</p> : null;
    const Content = data.length > 0 ? <View data={data} limit={limit} /> : <p>Введите имя репозитория</p>

    return (
        <div className='CardsList'>
            {loadingInfo}
            {errorInfo}
            {Content}
        </div>
    )
}

const View = ({ data, loading, limit }) => {
    return (
        <ul className='CardsList__inner'>
            {
                data.map((el, i) => {
                    if (i > limit) return;
                    return (
                        <Card
                            index={i}
                            key={el.id}
                            id={el.id}
                            author_name={el.owner.login}
                            pfile_img_url={el.owner.avatar_url}
                            repository_name={el.full_name}
                            stars={el.stargazers_count}
                            watches={el.watchers_count}
                            profile_url={el.owner.html_url}
                            repository_url={el.html_url}

                            // extended props

                            pushed_at={el.pushed_at}
                            topics={el.topics}
                        />
                    )
                })

            }
        </ul>
    )
}

export default CardsList