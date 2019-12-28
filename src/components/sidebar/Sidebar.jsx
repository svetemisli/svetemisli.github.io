import React, { useState, useEffect} from 'react'
import {connect} from 'react-redux'

import Filters from './Filters'
import Authors from './Authors'

const Sidebar = ({ allAuthors, sidebarOpen }) => {
  const [visibleAuthors, setVisibleAuthors] = useState([...allAuthors])

  useEffect(() => {
    setVisibleAuthors([...allAuthors])
  }, [allAuthors])

  const filterAuthors = text => {
    const filtered = [...allAuthors] // set to array
      .filter(name => name.toLowerCase().includes(text.toLowerCase()))
    setVisibleAuthors(filtered)
  }

  return (
    <aside className="sidebar">
      {sidebarOpen && 
        <div className="sidebar-inner">
          <Filters filterAuthors={filterAuthors}/>
          <Authors authors={visibleAuthors}/>
        </div>
      }
    </aside>
  )
}

const mapStateToProps = ({allAuthors, sidebarOpen}) => ({allAuthors, sidebarOpen})

export default connect(mapStateToProps)(Sidebar)
