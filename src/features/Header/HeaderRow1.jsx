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

            <GiHamburgerMenu
                className="HeaderRow1__btn"
            />

        </section>
    )
}

export default HeaderRow1