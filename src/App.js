import './App.css';

import Banner from "./composants/Banner";
import Cart from "./composants/Cart";
import ShoppingList from "./composants/ShoppingList";
import Footer from "./composants/Footer";
import {useEffect, useState} from "react";

function App() {
  const saveCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(saveCart ? JSON.parse(saveCart) : [] )
  const [activeCategory, setActiveCategory] = useState('')
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])


  return (<div>
    <Banner />
    <div className='lmj-layout-inner'>
      <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory}  />
      <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
    </div>
    <Footer />
  </div>);

}

export default App;
