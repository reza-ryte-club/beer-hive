import { Typography, Box, useTheme } from "@mui/material"
import { tokens } from "../theme"

interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box mt="6px">
            <Typography variant="h3"
                color={colors.greenAccent[400]}
                fontWeight="bold"
            >
                {title}
            </Typography>
        </Box>
    )

}


export default Header