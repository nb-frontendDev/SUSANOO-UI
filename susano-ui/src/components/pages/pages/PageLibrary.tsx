import React from 'react'
import Header from '../../organisums/header/Header'
import ComponentsIntroduction from '../../templates/ComponentsIntroduction'
import FooterTemplate from '../../templates/footer/FooterTemplate'

const ComponentLibrary = () => {
    return (
        <div>
            <Header />
            <ComponentsIntroduction />
            <FooterTemplate />
        </div>
    )
}

export default ComponentLibrary