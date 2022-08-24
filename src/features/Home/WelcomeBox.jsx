import './WelcomeBox.scss'
import { images } from '../../constants'
import SearchBar from '../Header/SearchBar'

function WelcomeBox() {
    return (
        <section 
            className="WelcomeBox"
            style={{backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${images.bck})`}}
        >

            <h1>
                Unsplash
            </h1>

            <p>
                The internet's source of freely-usable images. 
                Powered by creators everywhere.
            </p>


        </section>)
}

export default WelcomeBox