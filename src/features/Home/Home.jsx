import './Home.scss'
import WelcomeBox from './WelcomeBox'
import ImageBox from './ImageBox'
import ImageBox2 from './ImageBox2'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

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

            <ResponsiveMasonry>
                <Masonry
                    className={"Home__content"}
                    columnsCount={3}
                    gutter="2rem"
                >

                    {data?.map(item => (
                        <ImageBox2
                            key={item.id}
                            data={item}
                        />
                    ))}

                </Masonry>
            </ResponsiveMasonry>

        </div>
    )
}

export default Home