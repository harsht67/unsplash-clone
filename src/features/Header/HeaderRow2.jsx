import './HeaderRow2.scss'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topicChanged } from '../../store/topicSlice'

const topics = [
    "editorial",
    "girls-vs-stereotypes",
    "current-events",
    "wallpapers",
    "3d-renders",
    "textures-patterns",
    "experimental",
    "architecture",
    "nature",
    "business-work",
    "fashion",
    "film",
    "food-drink",
    "people",
    "interiors",
    "street-photography", 
    "travel",
    "animals",
    "spirituality",
    "arts-culture",
]

function HeaderRow2() {

    const topic = useSelector(state => state.topic.current)

    const [featuredTopic, setFeaturedTopic] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        
        setFeaturedTopic(topics[1])

    }, [])

    const changeCurrentTopic = (newTopic) => {
        dispatch(topicChanged(newTopic))
    }

    const getClassList = (item) => {
        let list = ""
        
        if(featuredTopic == item) {
            list = "nav--feat"
        }

        if(topic == item) {
            list += " nav--active"
        }

        return list
    }

    return (
        <nav className="HeaderRow2">

            <section className="HeaderRow2__focusNav">
                
                <span 
                    className={topic=="editorial" && "nav--active"}
                    onClick={() => changeCurrentTopic("editorial")}
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

                        {topics.map(item => (
                            <li 
                                key={item}
                                onClick={() => changeCurrentTopic(item)}
                                className={getClassList(item)}
                            >
                                {item.replace(/-/g, " ")}
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