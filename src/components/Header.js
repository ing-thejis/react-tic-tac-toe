import React from 'react'
import logo  from '../assest/logo.png'

export default function Header() {
    return (
        <div className="main-header">
            <img className="logo" src={logo} alt="logo" />
            <div className="titulo"><strong>Tic Tac Toe</strong></div>
        </div>
    )
}
