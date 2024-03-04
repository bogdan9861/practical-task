import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setData, setSavedSearchText } from '../../slices/mainSlice'

import search from '../../assets/images/search.png'
import { Service } from '../../service/Service'

import './Header.scss'

const Header = () => {

    const { savedSearchText } = useSelector(state => state.main);
    const [searchText, setSearchText] = useState('')

    const { getRepositoryByName } = Service();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setSavedSearchText(localStorage.getItem(`${localStorage.length}`)))
    }, [])

    useEffect(() => {
        if (savedSearchText != '' && savedSearchText != null) {
            onGetData(savedSearchText);
            setSearchText(savedSearchText)
        }

    }, [savedSearchText])

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const onGetData = (text) => {
        getRepositoryByName(text)
            .then(updateData)
            .catch(console.error)
    }

    const updateData = (data) => {

        console.log(data);

        if (search.length > 0) {
            dispatch(setData(data.items));
        } else {
            alert('сначала введите название')
        }
    }

    const saveSearchText = () => {
        localStorage.setItem(`${localStorage.length}`, searchText)
        localStorage.removeItem(`${localStorage.length - 2}`)
    }

    const onClick = () => {
        onGetData(searchText);
        saveSearchText();
    }




    return (
        <header className="header">
            <div className="header__inner">
                <form className="header__from" onSubmit={(e) => { e.preventDefault() }}>
                    <div className="header__form-inner">
                        <input
                            className="header__form-input"
                            type="text"
                            placeholder='Начните вводить текст для поиска (не менее трех символов)'
                            onChange={(e) => handleChange(e)}
                            value={searchText}
                        />
                        <button className="header__form-btn" onClick={() => onClick()}>
                            <img src={search} alt="" />
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header