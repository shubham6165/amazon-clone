import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <i className="fa fa-search header-searchIcon" aria-hidden="true"></i>
        {/* <SearchIcon className="header_searchIcon"/> */}
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header_optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLinetwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <i className="fa  fa-shopping-basket"></i>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
// http://pngimg.com/uploads/amazon/amazon_PNG11.png
export default Header;
