import Head from 'next/head';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Button from '@mui/material/Button';
import Link from 'next/link'
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useMoralis } from "react-moralis";

const useStyles = makeStyles(theme => ({

    header: {
        width : "100%"
    },
    a: {
        textDecoration: "none"
    }
}));



const HeaderComponent = () => {
    const classes = useStyles();

    const { authenticate, isAuthenticated ,logout} = useMoralis();

    const headerButton = () => {
        if(!isAuthenticated){
            return ( <Button color="inherit" onClick={() => authenticate()}>Login</Button>)
        }else{
            return ( <Button color="inherit" onClick={() => logout()}>Logout</Button>)
        }
    }

    return (
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Link href="/">
                        <a>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Block Moralis DApp
                            </Typography>
                        </a>

                    </Link>

                    {headerButton()}

                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default HeaderComponent;
