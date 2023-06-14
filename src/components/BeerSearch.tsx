
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useState, useEffect } from "react"
import { Beer } from "../constants"
import { getBeerByName } from '../api';
const BeerSearch = (props: { updateListOfBeers: (beers: Beer[]) => void }) => {
    const [selectedBeerName, setSelectedBeerName] = useState<string>('')
    const [listOfBeers, setListOfBeers] = useState<Beer[]>([])
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        updateBeerList()
    }, [])

    const updateBeerList = () => {
        getBeerByName('')
            .then((response) => {
                props.updateListOfBeers(response.data)
                setListOfBeers(response.data)
            })
    }
    
     
    useEffect(()=>{
        if(selectedBeerName.length > 0){
            getBeerByName(selectedBeerName)
            .then((response)=>{
                props.updateListOfBeers(response.data)
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setListOfBeers(response.data)
            })
        }
    }, [selectedBeerName])

    return (
        <Grid container >
            <Grid xs={12}>
                <Autocomplete
                    freeSolo
                    disablePortal
                    filterOptions={(x) => x}
                    id="beer-search-input"
                    options={ 
                        listOfBeers.map((beer: Beer )=>{
                            return beer.name
                        })||[]
                    }
                    sx={{ width: '75vw', maxWidth: 300, mt: '5vh' }}
                    onChange={(event: any, newValue: string | null) => {
                        if(newValue===null){
                            updateBeerList()
                        }
                    }}
                    onInputChange={(event, newInputValue) => {
                        // Update when user types
                        setSelectedBeerName(newInputValue)
                    }}
                    renderInput={(params) => <TextField {...params} label="Find My Beer... " />}
                />
            </Grid>
        </Grid>
  
    )
}

export default BeerSearch


