import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"
class Nav extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
        <SearchBar onSearch={this.props.onSearch} />
         
        <Link to= "/about"> <h3>ABOUT</h3> </Link>
        <Link to= "/home"> <h3>HOME</h3> </Link>

        </div>
        );
    }
}






export default Nav;