import React from 'react'
import { useState } from "react";

import Header from '../../components/Header/Header'
import CartsList from '../../components/CardList/CardsList'
import Navigation from '../../components/Navigation/Navigation/Navigation'

const Main = () => {

    const [limit, setLimit] = useState(10);

    return (
        <>
            <Header />
            <CartsList/>
            <Navigation/>
        </>
    )
}

export default Main