import React,{Component} from "react"
export default class Home extends Component{
    render(){
        return(
            <div id="home">
            <div className="ehome">
                <div><img src="men model.png" alt="" className="model model_man" /></div>
                <div className="econt">
                      <h1>Super Value Deals</h1>
                      <h1>On all products</h1>
                      <h2>Trade-in-offer</h2>
                      <h5>Save more with coupons & up to & 70% off</h5>
                      <button>Shop now</button>
                </div>
                <div className="eimage">
                     <img src="ecommodel.png" alt=""  className="model"/>
                </div>
            </div>
            <div className="add_div">
                <img src="https://mercury.akamaized.net/i/e560d3049cf9c420333134fe529a0587_303589_0.jpg" alt="" className="menadd add" />
            </div>
            </div>
        )
    }
}