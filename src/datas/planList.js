import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import cactus from '../assets/cactus.jpg'
import olivier from '../assets/olivier.jpg'
import calathea from '../assets/calathea.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import succulente from '../assets/succulent.jpg'

export const plantList = [
    {
        name: 'monstera',
        prix: 8,
        category: 'classique',
        id: '1ed',
        isBestSale: true,
        light: 2,
        water: 3,
        cover: monstera
    },
    {
        name: 'ficus lyrata',
        prix: 7,
        category: 'classique',
        isSpecialOffer: true,
        id: '2ab',
        light: 3,
        water: 1,
        cover: lyrata
    },
    {
        name: 'pothos argenté',
        prix: 3,
        category: 'classique',
        id: '3sd',
        light: 1,
        water: 2,
        cover: pothos
    },
    {
        name: 'cactus',
        prix: 2,
        category: 'classique',
        id: '4kk',
        light: 3,
        water: 1,
        cover: cactus
    },
    {
        name: 'olivier',
        prix: 45,
        category: 'extérieur',
        id: '5pl',
        light: 3,
        water: 1,
        cover: olivier
    },
    {
        name: 'géranium',
        prix: 6,
        category: 'extérieur',
        id: '6uo',
        light: 2,
        water: 2,
        cover: calathea
    },
    {
        name: 'basilique',
        prix: 4,
        category: 'extérieur',
        id: '7ie',
        isBestSale: true,
        light: 2,
        water: 3,
        cover: basil
    },
    {
        name: 'menthe',
        prix: 11,
        category: 'aromatique',
        id: '8fp',
        light: 2,
        water: 1,
        cover: mint
    },
    {
        name: 'succulente',
        prix: 9,
        category: 'plante grasse',
        id: '9vn',
        light: 2,
        water: 1,
        cover: succulente
    }
]