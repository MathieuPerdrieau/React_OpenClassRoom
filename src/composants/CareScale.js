
function handleClick(careType, scaleValue){
    const typeBesoin = careType === 'light' ? 'de lumière' : ' d\'eau'
    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }

    const x = quantityLabel[scaleValue]
    console.log(x);
    alert("Cette plante requier "+ x +' '+ typeBesoin +" 🌱✨")
}

function CareScale({scaleValue,careType}) {
    const range = [1,2,3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (<div onClick={ () => handleClick(careType, scaleValue)}>
        {range.map((rangeElem)=>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType} </span> : null
        )}
        </div>
    )
}

export default CareScale