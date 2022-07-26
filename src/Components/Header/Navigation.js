import React, { useState } from 'react'
import './Navigation.css'
import { MenuItems } from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSquareXmark, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'


const Navigation = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }


    return (
        <header>
            <div className="">
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Restora</h1>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon size='3x' style={{ color: "#fff" }} icon={click ? faXmark : faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        {
                            MenuItems.map(item => {
                                return (
                                    <li key={Math.random()} >
                                        <a href={item.url} className={item.cName} >{item.title}</a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <button style={{ background: "#E39402" }} className="btn" >Sing Up</button>
                </nav>
            </div>
        </header>
    )
}

export default Navigation