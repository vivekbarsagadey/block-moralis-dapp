import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
        color:theme.palette.primary.light,
        backgroundColor:theme.palette.primary.main,
    }
}));

const FooterComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            this is footer
        </div>
    )
}
export default FooterComponent;
