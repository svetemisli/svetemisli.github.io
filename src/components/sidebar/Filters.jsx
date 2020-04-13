import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {filterQuotes, filterAuthors, useTranslate, setPhrase, setAuthorPhrase, setSourcePhrase} from '../../store/actions'
import {LS} from '../../config/localstorage'

const Filters = () => {
  const {phrase, authorPhrase, sourcePhrase} = useSelector(state => state)
  const translate = useTranslate()
  const dispatch = useDispatch()
  const [showFilters, setShowFilters] = useState(localStorage.getItem(LS.showFilters) === 'true')

  const changePhrase = e => {
    dispatch(setPhrase(e.target.value))
    dispatch(filterQuotes())
  }

  const changeAuthorPhrase = e => {
    dispatch(setAuthorPhrase(e.target.value))
    dispatch(filterAuthors())
  }

  const changeSourcePhrase = e => {
    dispatch(setSourcePhrase(e.target.value))
    dispatch(filterQuotes())
  }

  const toggleFilters = () => {
    localStorage.setItem(LS.showFilters, !showFilters)
    setShowFilters(!showFilters)
  }

  return (
    <div className="filters">
      <h3><label htmlFor="izreke">{translate('SEARCH_QUOTES')}</label></h3>
      <input id="izreke" value={phrase} placeholder="latin input" onChange={changePhrase} />

      <h3><label htmlFor="avtori">{translate('SEARCH_AUTHORS')}</label></h3>
      <input id="avtori" value={authorPhrase} onChange={changeAuthorPhrase} />

      <div style={{textAlign: 'right'}} >
        <span onClick={toggleFilters}>⚙</span>
      </div>
      {showFilters &&
        <div>
          <h3><label htmlFor="izvori">{translate('SEARCH_SOURCES')}</label></h3>
          <input id="izvori" value={sourcePhrase} onChange={changeSourcePhrase} />

          <h3>Dužina citata</h3>
          <div>
            <label htmlFor="min">Min</label>
            <input id="min" type="range" min="1" max="500" value="1" />
          </div>
          <div>
            <label htmlFor="max">Max</label>
            <input id="max" type="range" min="1" max="500" value="500" />
          </div>
        </div>
      }
    </div>
  )}

export default Filters