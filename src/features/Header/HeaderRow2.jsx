import './HeaderRow2.scss'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

const navList = [
    "Editorial",
    "Girls vs. Sterotypes",
    "Current Events",
    "Wallpapers",
    "3D renders",
    "Textures & Patterns",
    "Experimental",
    "Architecture",
    "Nature",
    "Business Work",
    "Fashion",
    "Film",
    "Food & Drink",
    "Health & Wellness",
    "People",
    "Interiors",
    "Street Photography", 
    "Travel",
    "Animals",
    "Spirituality",
    "Arts & Culture",
    "History",
    "Athlestics",
]

function HeaderRow2() {

    const [currNav, setCurrNav] = useState('')

    const [featNav, setFeatNav] = useState('')

    useEffect(() => {
        
        setCurrNav(navList[0])

        setFeatNav(navList[1])

    }, [])

    const getClassList = (item) => {
        let list = ""
        
        if(featNav==item) {
            list = "nav--feat"
        }

        if(currNav==item) {
            list += " nav--active"
        }

        return list
    }

    return (
        <nav className="HeaderRow2">

            <section className="HeaderRow2__focusNav">
                
                <span 
                    className={currNav=="Editorial" && "nav--active"}
                    onClick={() => setCurrNav("Editorial")}
                >
                    Editorial
                </span>

                <hr/>

            </section>

            <section className="HeaderRow2__nav">

                <RiArrowLeftSLine
                    className="HeaderRow2__nav__btn HeaderRow2__nav__btn--left"
                />
                
                <div className="HeaderRow2__nav__content">
                    <ul className="ul-nav">

                        {navList.map(item => (
                            <li 
                                key={item}
                                onClick={() => setCurrNav(item)}
                                className={getClassList(item)}
                            >
                                {item}
                            </li>
                        ))}

                    </ul>
                </div>

                <RiArrowRightSLine
                    className="HeaderRow2__nav__btn HeaderRow2__nav__btn--right"
                />

            </section>

        </nav>
    )
}

export default HeaderRow2