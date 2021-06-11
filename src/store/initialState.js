import quotes from '../data/quotes.json'
import {shuffle, getDerived} from '../utils/helpers'

const storage = localStorage.getItem('sveteMisli')
  ? JSON.parse(localStorage.getItem('sveteMisli'))
  : {}
// need for getDerived
storage.lang = storage.lang || 'ms'
storage.allQuotes = storage.allQuotes || shuffle(quotes)

const {lang, script, minLimit, maxLimit, showFilters, showSidebar, phrase, sourcePhrase, authorPhrase, selectedAuthors, allQuotes, page} = storage
const {minLength, maxLength, allAuthors, filteredQuotes, filteredAuthors} = getDerived(storage)

const initialState = {
  allQuotes,
  allAuthors,
  filteredQuotes,
  filteredAuthors,
  minLength,
  maxLength,
  lang,
  script: script || 'kir',
  showFilters: showFilters || false,
  showSidebar: showSidebar || false,
  minLimit: minLimit || minLength,
  maxLimit: maxLimit || maxLength,
  selectedAuthors: selectedAuthors || [],
  phrase: phrase || '',
  authorPhrase: authorPhrase || '',
  sourcePhrase: sourcePhrase || '',
  page: page || 0,
}

export default initialState