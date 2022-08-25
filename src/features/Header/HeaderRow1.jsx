import './HeaderRow1.scss'

import { images } from '../../constants'
import SearchBar from './SearchBar'

import { GiHamburgerMenu } from 'react-icons/gi'

function HeaderRow1() {
    return (
        <section className="HeaderRow1" >

            <img
                src={images.logo}
                alt="unsplash logo"
                className="HeaderRow1__logo"
            />

            <SearchBar/>

            <nav className="HeaderRow1__nav">
                <ul className="ul-nav" >
                    <li>Explore</li>
                    <li>Advertise</li>
                    <li>Blog</li>
                </ul>
            </nav>

            <div className="HeaderRow1__register">
                Log in / Sign up
            </div>

            <button
                className="HeaderRow1__submitBtn sm-text"
            >
                Submit a photo
            </button>    


            <GiHamburgerMenu
                className="HeaderRow1__menuBtn"
            />

        </section>
    )
}

export default HeaderRow1