import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import {useEffect, useState} from 'react'
import { useTheme } from "@mui/material"
import { Pagination, Typography } from "@mui/material"
import { Beer } from "../constants"
import { tokens } from "../theme"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import DetailsView from './DetailsView'

const BeerList = (props: { listOfBeers: Beer[] }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const {listOfBeers} = props
    const defaultPaginationNumber = listOfBeers.length > 0 ? Math.ceil(listOfBeers.length / 10) : 1
    const [paginationNumber, setPaginationNumber] = useState<number>(defaultPaginationNumber)
    const [beersPerPage, setBeersPerPage] = useState<number>(10)
    const [beers, setBeers] = useState<Beer[]>(listOfBeers.slice(0, beersPerPage))
    const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false)
    const [selectedBeer, setSelectedBeer] = useState<Beer>(listOfBeers[0])
    
    useEffect(() => {
        setPaginationNumber(listOfBeers.length > 0 ? Math.ceil(listOfBeers.length / 10) : 1)
        setBeersPerPage(10)
        setBeers(listOfBeers.slice(0, 10))
    }, [listOfBeers])

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setBeers(listOfBeers.slice((page - 1) * beersPerPage, page * beersPerPage))
    }

    const showDetails = (beer: Beer) => {
        setSelectedBeer(beer)
        setIsDetailsVisible(true)
    }
    
    const closeDetails = () => {
        setIsDetailsVisible(false)
    }

    const beerComp = 
        beers.map((beer: Beer, index: number) => {
            return (
                <>
                    <ListItem alignItems="flex-start" key={`list-item-${index}`}>
                        <ListItemAvatar key={`list-item-avatar-${index}`}>
                            <Avatar 
                                key={`list-item-avatar-image-${index}`}
                                alt="Remy Sharp" 
                                src={beer?.image_url} 
                                sx={{ height: '150px', width: '50px', borderRadius: '0', mr: 2 }} 
                            />
                        </ListItemAvatar>
                        <ListItemText
                            key={`list-item-text-${index}`}
                            primary={
                                    <Typography
                                            key={`list-item-text-primary-${index}`}
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="h2"
                                            color="text.primary"
                                        >
                                            {beer?.name}
                                        </Typography>
                                }
                                secondary={
                                    <span key={`list-item-secondary-${index}`}>
                                        <Typography
                                            key={`list-item-text-secondary-${index}`}
                                            sx={{ display: 'inline', pr: 1 }}
                                            component="span"
                                            variant="h5"
                                            color="text.primary"
                                        >
                                            {beer?.tagline}
                                        </Typography>
                                        <br />
                                        <Typography
                                            key={`list-item-text-secondary-abv-${index}`}
                                            sx={{ display: 'inline', pr: 1 }}
                                            component="span"
                                            variant="body1"
                                            color="text.primary"
                                        >
                                            {beer?.abv}% Alc
                                        </Typography>
                                        <br />
                                        <Button
                                            key={`list-item-text-secondary-button-${index}`}
                                            variant="contained"
                                            color="info"
                                            size="small"
                                            onClick={() => showDetails(beer)}
                                        >
                                            Details
                                        </Button>
                                    </span>
                                }
                            />
                        </ListItem>
                    <Divider
                        key={`list-item-divider-${index}`} 
                        variant="inset" 
                        component="li" 
                        sx={{ display: index === beers.length-1 ? 'none':'flex' }} 
                    />
                </>
                
            )
        })

   
    
   
    const details =  (
        <Modal
            open={isDetailsVisible}
            onClose={closeDetails}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'scroll'
            }}
        >
            <Grid container>
                <Grid xs={12} sx={{ justifyContent: 'center', bgcolor: 'background.paper', ml: '5vw', mr: '5vw' }}>
                    <Button 
                        startIcon={<CloseIcon />} 
                        onClick={closeDetails}
                    />
                </Grid>                   
                <DetailsView selectedBeer={selectedBeer} />
                </Grid>
        </Modal>
    )

    return(
        <Grid container spacing={2} sx={{ justifyContent: 'flex-end', padding:'0 0'}}>
                <List sx={{
                    width: '100%', bgcolor: colors.grey[900], ml: '15vw', mr: '13vw'
                }}>
                    {beerComp}
                </List>
            <Pagination
                count={paginationNumber}
                color="primary"
                sx={{
                    mt: 3, mb: 3,
                    display: listOfBeers.length > 0 ? 'flex' : 'none'
                }}
                onChange={handleChangePage}
            />
                {details}    
                
                
            </Grid>

            
        )
        
}

export default BeerList
