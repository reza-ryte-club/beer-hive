import axios from "axios"


export const getBeerByName = async (beerName: string = "") => {
    return beerName.length > 0 ?
        await axios(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`) :
        await axios(`https://api.punkapi.com/v2/beers?page=1&per_page=30`)
}