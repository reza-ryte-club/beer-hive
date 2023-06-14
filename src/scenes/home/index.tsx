import {useState} from 'react'
import { Box } from "@mui/material"
import BeerSearch from "../../components/BeerSearch"
import BeerList from "../../components/BeerList"
import {Beer} from "../../constants"

const Home = () => {
    const [listOfBeers, setListOfBeers] = useState<Beer[]>([])
    const updateListOfBeers = (beers: Beer[]) => {
        setListOfBeers(beers)
    }

    return (
        <div>
            <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                <BeerSearch updateListOfBeers={updateListOfBeers} />
            </Box>
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                p={2}
            >
                <BeerList listOfBeers={listOfBeers}/>
            </Box>            
        </div>
    )
}

export default Home