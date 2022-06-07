// import {plantList} from "../datas/planList";
// import Promotion from "./Promotion";
// import CareScale from "./CareScale";
//
// {plantList.map((plant) => (
//     <li key={plant.id} className='lmj-plant-item'>
//         {plant.name}
//         <Promotion isSpecialOffer= {plant.isSpecialOffer}/>
//         <CareScale careType='water' scaleValue={plant.water} />
//         <CareScale careType='light' scaleValue={plant.light} />
//     </li>
//
// ))}
 import "../styles/PlantItem.css"

import CareScale from "./CareScale";
import Promotion from "./Promotion";


// function handleClick(plantName) {
//     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}
function PlantItem({id, cover,name, prix,water, light,isSpecialOffer }){

    return (<li key={id} className='lmj-plant-item' onClick={ () =>handleClick(name)}>
        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        {name} - {prix}€
        {/*<img src={logo} alt="---" className="lmj-logo"/>*/}
        <div className="horizontale">
            <div className="vertical" >
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
            <div className="vertical">
                <Promotion isSpecialOffer= {isSpecialOffer}/>
            </div>
        </div>
    </li>)

}

export default PlantItem