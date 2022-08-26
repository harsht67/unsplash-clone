import './SearchBar.scss'
import { searchUpdated } from '../../store/searchSlice'

import { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineScan } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

function SearchBar() {

    const search = useSelector(state => state.search.query)

    const [data, setData] = useState('')

    useEffect(() => {
        setData(search)
    }, [search])

    const [size, setSize] = useState(null)

    const dispatch = useDispatch()

    const updateSize = () => {
        let newSize = window.innerWidth
        
        setSize(newSize)
    }

    useEffect(() => {
        updateSize()

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)

    }, [])

    const changeHandler = (e) => {
        const newData = e.target.value 

        setData(newData)
    }

    const submitHandler = (e) => {
        if(e.key === 'Enter') {
            dispatch(searchUpdated(data))
        }
    }

    const clearSearchField = () => {
        setData('')
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
                onKeyDown={submitHandler}
                placeholder={`Search ${size>=1200 ? "high-resolution " : ""}photos`}
            />

            {data &&
                <RiCloseFill
                    className="icons"
                    onClick={clearSearchField}
                />
            }

            <AiOutlineScan
                className="icons"
            />

        </div>
    )
}

export default SearchBar