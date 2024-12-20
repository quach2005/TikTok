import classNames from "classnames/bind";
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

import * as searchServices from '~/services/Search-services'
import style from './Search.module.scss'
import {PopperWrapper} from "~/components/Popper";
import  AccountsItem  from "~/components/AccountsItem/index";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "~/Hooks";
import { Link } from "react-router-dom";

const cx = classNames.bind(style)
function  Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const debouncedValue = useDebounce(searchValue, 700)

    const refInput = useRef()

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        const fetchApi = async () => {
            const res = await searchServices.search(debouncedValue)
            setSearchResult(res)
            setLoading(false)
        }
        fetchApi() 
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('')
        refInput.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (searchValue.startsWith(' ')) {
            return
        }
        setSearchValue(searchValue)
    }
    
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <TippyHeadless
                onClickOutside={handleHideResult}
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div tabIndex="-1" {...attrs} className={cx("search-result")}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>
                                Accounts
                            </h4>
                            {searchResult.map(result => (
                                <AccountsItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={refInput}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {(searchValue && !loading) && <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
                    <Link to={`/search/${searchValue?searchValue:'keyword'}`} className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
