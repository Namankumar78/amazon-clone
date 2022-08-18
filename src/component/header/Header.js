import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{ basket } , dispatch] = useStateValue();
  return (
    <div id="header">
      <Link to="/">
        <img
          id="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div id="header_search">
        <input id="header_searchInput" type="text" />
        <SearchIcon id="header_searchIcon" />
      </div>

      <div id="header_nav">
        <div id="header_option">
          <span id="header_optionLineOne">Hello Guest</span>
          <span id="header_optionLineTwo">Sign In</span>
        </div>

        <div id="header_option">
          <span id="header_optionLineOne">Returns</span>
          <span id="header_optionLineTwo">& Orders</span>
        </div>


        <div id="header_option">
          <span id="header_optionLineOne">Your</span>
          <span id="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div id="header_optionBasket">
            <ShoppingBasketIcon />
            <span id="header_optionLineTwo header_basketCount"> {basket.length} </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header 