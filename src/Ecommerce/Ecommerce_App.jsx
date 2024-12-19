import React,{Component} from "react";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Cards from "./Component/Cards"
import Footer from "./Component/Footer"
import "./ecommerce_style.css"
export default class Ecommerce_App extends Component{
    render(){
        return (
            <>
            <Nav/>
            <Home/>
            <Cards/>
            <Footer/>
            </>
        )
    }
}