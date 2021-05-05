import logo from './logo.svg';
import './App.css';
import Header from './header';
import Card from './card';
import { useState } from 'react';

function App() {
let cardData = [
  {
    key:1,
    name:'Item One',
    price:24,
    description :`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!`,
    rating:'★ ★ ★ ★ ☆'
  },
  {
    key:2,
    name:'Item Two',
    price:4,
    description :`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!`,
    rating:'★ ★ ★ ★ ☆'
  },
  {
    key:3,
    name:'Item Three',
    price:45,
    description :`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!`,
    rating:'★ ★ ★ ★ ☆'
  },
  {
    key:4,
    name:'Item Four',
    price:55,
    description :`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!`,
    rating:'★ ★ ★ ★ ☆'
  },
  {
    key:5,
    name:'Item Five',
    price:249,
    description :`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!`,
    rating:'★ ★ ★ ★ ☆'
  },
  {
    key:6,
    name:'Item Six',
    price:499,
    description :`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!`,
    rating:'★ ★ ★ ★ ☆'

  }
];

const [cart,setCart] = useState([]);
const [total,setTotal] = useState(0);


let addToCart = (data) =>{
  setCart([...cart,data])
  setTotal(total+data.price)

}

let removeFromCart = (data) =>{
  setCart(cart.filter((val)=> val.key !== data.key))
  setTotal(total-data.price);
}



return <>
<Header></Header>
<div className="container">
    <div className="row">
      <div className="col-lg-3">
      <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          {
             cart.map((item)=>{
                return <>
                     <h6 className="list-group-item">{item.name}-${item.price}<button type="button" className="btn btn-danger" onClick={
                       ()=>{
                        removeFromCart(item)
                       
                       }
                     }>X</button></h6>
                     
                </>
              })
            }
            <h6 className="list-group-item">Total-${total}</h6>
                       
        </div>
      </div>
      <div className="col-lg-9">
        <div className="row">
          {
            cardData.map((obj)=>{
             
              return <>
                <Card data={obj} buttonClick={addToCart} disabled={cart}></Card>
              </>
            })
          }
        </div>
      </div>
    </div>
  </div>
</>
}

export default App;
