import React from 'react'

import Images from '@assets/angryBirds.png'
import './style.css'

export default class App extends React.Component {
    render() {
        return (
            <>
                <img className="image" src={Images} alt=""/>
                <div> angryBirds </div>
            </>
        )
    }
}