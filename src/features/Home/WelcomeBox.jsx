import './WelcomeBox.scss'
import { images } from '../../constants'
import SearchBar from '../Header/SearchBar'

function WelcomeBox() {
    return (
        <section 
            className="WelcomeBox"
            style={{backgroundImage: `linear-gradient(#0000001A, #0000001A), url(${images.bck})`}}
        >

            <section className="WelcomeBox__main">

                <h1 className="f3" >
                    Unsplash
                </h1>

                <p className="lg-text" >
                    The internet's source of freely-usable images.<br/> 
                    Powered by creators everywhere.
                </p>

                <SearchBar/>

                <section>
                    <span>Trending: </span>
                    <a>flower, </a>
                    <a>wallpapers, </a>
                    <a>backgrounds, </a>
                    <a>happy, </a>
                    <a>love, </a>
                </section>

            </section>

            <footer className="WelcomeBox__footer sm-text">
                
                <small>
                    Photo by and machines
                </small>

                <small>
                    Read more about the Unsplash License
                </small>

            </footer>


        </section>)
}

export default WelcomeBox