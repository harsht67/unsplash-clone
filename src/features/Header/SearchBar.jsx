import './SearchBar.scss'

import { useState } from 'react'
import { AiOutlineSearch, AiOutlineScan } from 'react-icons/ai'

function SearchBar() {

    const [data, setData] = useState('')

    const changeHandler = (e) => {
        const newData = e.target.value 

        setData(newData)
    }

    return (
        <div className="SearchBar">

            <AiOutlineSearch
                className="icons"
            />

            <input
                type="text"
                value={data}
                onChange={changeHandler}
                placeholder="Search photos"
            />

            <AiOutlineScan
                className="icons"
            />

        </div>
    )
}

export default SearchBar