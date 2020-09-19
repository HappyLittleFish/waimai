import './Header.scss'

import React from 'react'

import SearchBar from '../SearchBar/SearchBar'

/**
 * @constructor <Header />
 * @description 顶部banner
 */

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <SearchBar />
        <img className="banner-img" src="./static/banner.jpg" />
      </div>
    )
  }
}

export default Header
