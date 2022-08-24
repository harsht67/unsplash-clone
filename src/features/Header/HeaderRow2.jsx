import './HeaderRow2.scss'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const navList = [
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
    return (
        <nav className="HeaderRow2">

            <section className="HeaderRow2__focusNav" >

                <span>
                    Editorial
                </span> 
            
            </section>

            <section className="HeaderRow2__nav">

                <RiArrowLeftSLine
                    className="HeaderRow2__nav__btn HeaderRow2__nav__btn--left"
                />
                
                <div className="HeaderRow2__nav__content">
                    <ul>

                        {navList.map(item => (
                            <li key={item}>
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