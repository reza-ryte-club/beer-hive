import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import {Beer, Ingredient} from '../constants'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Typography } from '@mui/material'
import moment from 'moment'

const DetailsView = (props: { selectedBeer: Beer }) => { 
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const timeOfBrew = moment(props.selectedBeer?.first_brewed, 'MM/YYYY').format('MMMM YYYY')
    return (
        <List sx={{
            width: '100%', height: '70vh', bgcolor: 'background.paper', ml: '5vw', mr: '5vw', overflow: 'scroll', overflowX: 'hidden'
        }}>
            <ListItem alignItems="flex-start" key="item-1">
                <ListItemAvatar key="item-avatar-1">
                    <Avatar alt="Remy Sharp" src={props.selectedBeer?.image_url} sx={{ height: '150px', width: '50px', borderRadius: '0', mr: 2 }} />
                </ListItemAvatar>
                <ListItemText
                    key="item-text-1"
                    primary={
                        <>
                            <Typography
                                key="item-text-type-1"
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h2"
                                color={colors.primary[100]}
                            >
                                {props.selectedBeer?.name}
                            </Typography>
                        </>
                    }
                    secondary={
                        <>
                            <Typography
                                key="item-text-type-2"
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >
                                {props.selectedBeer?.tagline}
                            </Typography>
                            <br />
                            <Typography
                                key={`item-food-abv`}
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="body2"
                                color={colors.primary[100]}
                            >
                                {props.selectedBeer?.abv}% Alc
                            </Typography>
                            <br />
                            <Typography
                                key={`item-food-desc`}
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="body2"
                                color={colors.primary[100]}
                            >
                            {props.selectedBeer?.description}
                            </Typography>
                            <br />
                            <Typography
                                key="item-text-type-3"
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="h6"
                                color={colors.primary[100]}
                            >
                                Pair with:
                            </Typography>
                            
                            {props.selectedBeer?.food_pairing.map((food: string, foodIndex: number) => {
                                return (
                                    <Typography
                                        key={`item-food-${foodIndex}`}
                                        sx={{ display: 'inline', pr: 1 }}
                                        component="span"
                                        variant="body2"
                                        color={colors.primary[100]}
                                    >
                                        {food},&nbsp;
                                    </Typography>
                                )
                            })} 
                        </>
                    }

                />

            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" key='item-2'>
                <ListItemText
                    key="item-text-2"
                    primary={
                        <>
                            <Typography
                                key="item-text-type-4"
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h4"
                                color={colors.primary[100]}
                            >
                                Great to know
                            </Typography>
                        </>
                    }
                    secondary={
                        <>
                            <br />
                            <Typography
                                key={`brewing-time-title`}
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >
                                First Brewed:
                            </Typography>
                            <Typography
                                key={`brewing-time-value`}
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="body1"
                                color={colors.primary[100]}
                            >
                                {timeOfBrew}
                            </Typography>
                            <br />
                            <Typography
                                key={`brewer-tips-title`}
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >
                                Brewer Tips
                            </Typography>
                            <br />
                            <Typography
                                key={`brewer-tips-value`}
                                sx={{ display: 'inline', pr: 1 }}
                                component="span"
                                variant="body1"
                                color={colors.primary[100]}
                            >
                            {props.selectedBeer?.brewers_tips}
                            </Typography>
                            <br />
                            <br />
                            <Typography
                                key={`ingredients-title`}
                                sx={{ display: 'inline', pr: 1, mt: 2 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >
                                Ingredients:
                            </Typography>
                            <br />
                            <Typography
                                key={`ingredients-title-malt`}
                                sx={{ display: 'inline', pr: 1, mt: 2 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >
                                Malt -

                            </Typography>
                            {props.selectedBeer?.ingredients.malt.map((malt: Ingredient, maltIndex: number) => {
                                return (
                                    <Typography
                                        key={`ingredients-title-malt-${maltIndex}`}
                                        sx={{ display: 'inline', pr: 1, mt: 2 }}
                                        component="span"
                                        variant="body1"
                                        color={colors.primary[100]}
                                    >       
                                        {malt.name},&nbsp;

                                    </Typography>
                                )
                            })}
                            <br />
                            <Typography
                                key='ingredients-title-hops'
                                sx={{ display: 'inline', pr: 1, mt: 2 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >       
                                Hops -
                            </Typography>
                            {props.selectedBeer?.ingredients.hops.map((hops: Ingredient, hopsIndex: number) => {
                                return (
                                    <Typography
                                        key={`ingredients-title-hops-${hopsIndex}`}
                                        sx={{ display: 'inline', pr: 1, mt: 2 }}
                                        component="span"
                                        variant="body1"
                                        color={colors.primary[100]}
                                    >     
                                    
                                        {hops.name},&nbsp;

                                    </Typography>
                                )
                            })}
                            <br />
                            <Typography
                                key='ingredients-title-yeast'
                                sx={{ display: 'inline', pr: 1, mt: 2 }}
                                component="span"
                                variant="h5"
                                color={colors.primary[100]}
                            >   
                            Yeast - 
                            </Typography>
                            <Typography
                                key='ingredients-value-yeast'
                                sx={{ display: 'inline', pr: 1, mt: 2 }}
                                component="span"
                                variant="body1"
                                color={colors.primary[100]}
                            >   
                            {props.selectedBeer?.ingredients.yeast}
                            </Typography>
                        </>
                    }

                />

            </ListItem>

        </List> 
    )
}

export default DetailsView;