import './Home.scss'
import WelcomeBox from './WelcomeBox'
import ImageBox from './ImageBox'
import ImageBox2 from './ImageBox2'

import { useEffect, useState } from 'react'
import axios from 'axios'
// import GridLayout from 'react-grid-layout'
// import Masonry from 'masonry-layout'
// import Masonry from 'react-masonry-component'

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.unsplash.com/photos/random?client_id=6FwjynLcZYVVjDDvsN_Ls-2mWKJrAlirkzoBG00JioU&count=10`)
            .then(res => setData(res.data))
    }, [])

    console.log(data)

    return (
        <div className="Home">

            <WelcomeBox/>

            <section
                className={"Home__content"}
            >

                {data?.map(item => (
                    <ImageBox2
                        key={item.id}
                        data={item}
                    />
                ))}

            </section>

        </div>
    )
}

export default Home