import React, {Component} from 'react'
import AuthorImage from './AuthorImage'
import './AuthorBox.css'

class AuthorBox extends Component {
  render() {
    const { author } = this.props
    return (
      <div className="thumbnail">
        <h3>{author}</h3>
        <AuthorImage author={author} showUnknown={true} />
      </div>
    )
  }
}
export default AuthorBox
