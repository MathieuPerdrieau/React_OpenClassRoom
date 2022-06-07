import '../styles/ShoppingList.css'
import { plantList } from '../datas/planList'

import PlantItem from "./PlantItem";
import Categories from "./Categories";
//import {useState} from "react";

function ShoppingList({ cart, updateCart , activeCategory, setActiveCategory}) {
    //const [activeCategory, setActiveCategory] = useState('')

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, prix){
        const currentPlanAdded = cart.find((plant) => plant.name === name)
        if (currentPlanAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, prix, amount: currentPlanAdded.amount +1}
            ])
        }
        else{
                updateCart([...cart, {name, prix, amount :1}])
        }
    }

    return (
        <div className='lmj-shopping'>
            {/*<ul className='lmj-plant-list'>*/}
            {/*    {categories.map((cat) => (*/}
            {/*        <li key={cat}>{cat}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            <Categories
                categories={categories}
                activeCategory ={activeCategory}
                setActiveCategory={setActiveCategory}
            />


            <ul className='lmj-plant-list'>
                {plantList.map(({id,name,prix,category,isSpecialOffer, water, light,cover}) =>
                    !activeCategory || activeCategory === category ?
                    (
                        <div key={id}>
                            <PlantItem
                                key={id}
                                name={name}
                                prix = {prix}
                                category={category}
                                isSpecialOffer={isSpecialOffer}
                                water={water} light={light}
                                cover={cover}/>
                            <button onClick={() => addToCart(name , prix)}>Ajouter</button>
                        </div>
                    ) : null)}
            </ul>
        </div>
    )
}
export default ShoppingList