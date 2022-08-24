import './ImageBox.scss'
import User from './User'

import { HiHeart, HiOutlinePlus } from 'react-icons/hi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

function ImageBox(props) {

    const { user, urls } = props.data

    return (
        <article className="ImageBox">

            <header className="ImageBox__header">

                <User user={user} />

            </header>

            <img
                className="ImageBox__img"
                src={urls.small}
                alt="image"
            />

            <footer  className="ImageBox__footer">

                <div>
                    <HiHeart className="icons" />
                </div>

                <div>
                    <HiOutlinePlus className="icons" />
                </div>

                <div>
                    <span>Download</span>
                    <MdOutlineKeyboardArrowDown className="icons"/>
                </div>


            </footer>

        </article>
    )
}

export default ImageBox