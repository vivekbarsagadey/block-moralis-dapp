import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../util/theme";

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    marginTop: theme.spacing(0.4),
    flex: "auto",
    display: "flex",
    flexDirection: "column"
};

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        alignItems: 'flex-start',
        rowGap: theme.spacing(2),
        flexWrap: "wrap",
        columnGap: theme.spacing(2),
        alignContent: "space-between",

    },
    mainitem: {
        flex: 1,
    }
}));

const Layout = props => {
    const classes = useStyles();
    return (
        <div className="layout" style={layoutStyle}>
            <HeaderComponent/>
            <div className={classes.main}>
                <div className={classes.mainitem}>
                    <main style={contentStyle}>
                        {props.children}
                    </main>
                </div>
            </div>
            <FooterComponent></FooterComponent>

        </div>
    )
};

export default Layout;
