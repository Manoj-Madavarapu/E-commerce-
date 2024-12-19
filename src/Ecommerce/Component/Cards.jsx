import React, {useEffect,useState} from "react"
let Cards=()=>{
    let [api,setapi]=useState({users:[]});
    let [count,setcount]=useState({});
    let [search,setsearch]=useState("");
    useEffect(()=>{
        let api=fetch("https://fakestoreapi.com/products").then(res=>res.json())
        .then(val=>{
            setapi({users:val});
        }) 
        .catch(err=>console.log(err))   
    },[])

    // particular product increment and decrement  code 
    let increment = (id) => {
      setcount((prev) => ({
          [id]: (prev[id] || 0) + 1,
      }));
  };

  let decrement = (id) => {
      setcount((prev) => {
          let currentCount = prev[id] || 0;
          if (currentCount <= 0) return prev;
          return {
              ...prev,
              [id]: currentCount - 1,
          };
      });
  };

  let reset = (id) => {
      setcount(() => ({
          [id]: 0,
      }));
  };


    return(
        <div id="cards"> 
           <div className="hardwork">
               <h1>Search :</h1>
               <input type="text" placeholder="Search Products" value={search} onChange={(e)=>setsearch(e.target.value)}/> 
           </div>
           <div className="fake">
               {api.users.filter(x=>x.title.toLowerCase().includes(search))
                .map((x)=>{
                    return(
                        <div key={x.id} className="fakestore_cards">
                            <div className="image">
                               <img src={x.image} alt="" />
                            </div>
                            <h5 className="center">{x.category}</h5>
                            <div className="cont">
                               <h1 className="title">{x.title}</h1>
                                <h3><span className="dollar">$ </span>{x.price}</h3>
                            <div className="rating_div">  
                                <h4 className="star">{x.rating.rate} ⭐</h4>
                                <h4>{x.rating.count}</h4>
                            </div>
                                <p><span className="about_product">About Product:</span>{x.description}</p>
                                <button  className="btn" onClick={()=>increment(x.id)}>+</button>
                                <span><button className="btn" >{count[x.id] || 0}</button></span>
                                <button className="btn" onClick={()=>decrement(x.id)}>-</button><br />
                                <button className="btn " id="clear_cart" onClick={()=>reset(x.id)}>Clear Products</button>
                            </div>
                        </div>
                    )
                })
               }
           </div>
        </div>
    )
}
export default Cards;

