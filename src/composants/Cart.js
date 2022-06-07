import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart , activeCategory}) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, planType)=> acc + planType.prix * planType.amount, 0
    )
    useEffect(() => {
       // alert(`J'aurai ${total}€ à payer 💸`)
        document.title = `LMJ: ${total}€ d'achats`
    }, [total, activeCategory])

    function supprimerArticle(name){
        const currentPlanDeleted = cart.find((plant) => plant.name === name)
        if (currentPlanDeleted) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart(cartFilteredCurrentPlant)
        }

    }
    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.map(({ name, prix, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {prix}€ x {amount}
                    <button onClick={() => supprimerArticle(name)}>supprimer article</button>
                </div>
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart