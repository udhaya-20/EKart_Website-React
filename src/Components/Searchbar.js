import React from "react";
import './Searchbarstyle.css'
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div >
      <form className="searchbar">
        {/* <button className="searchbtn" type=""><FaSearch/></button> */}
          <input type="search" placeholder="Search..."/>
      </form>
    </div>
  );
};

export default Searchbar;
