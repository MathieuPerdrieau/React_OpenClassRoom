import CareScale from "./CareScale";

function Plante(props){
    return (<div>
        <p>{props.label} - {props.prix}€</p>
        <CareScale scaleValue={props.light} />
    </div>)
}

export default Plante