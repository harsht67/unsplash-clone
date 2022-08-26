import './HeaderRow1.scss'
import { images } from '../../constants'
import SearchBar from './SearchBar'
import { searchCleared } from '../../store/searchSlice'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'
import { topicChanged } from '../../store/topicSlice'

function HeaderRow1() {

    const dispatch = useDispatch()

    const goToHome = () => {
        dispatch(searchCleared())

        dispatch(topicChanged('editorial'))
    }

    return (
        <section className="HeaderRow1" >

            <img
                src={images.logo}
                alt="unsplash logo"
                className="HeaderRow1__logo"
                onClick={goToHome}
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
                <span>Log in</span> / <span>Sign up</span>
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