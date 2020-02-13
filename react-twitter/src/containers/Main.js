import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Menu} from "../components/Menu";
import HeaderPanel from "../components/HeaderPanel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {EXPLORE, HOME, PROFILE} from "../store/stateMenu/enum";
import Profile from "./Profile";
import {Home} from "./Home";
import {Explore} from "./Explore";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        width: '100%',
        overflow: 'auto',
        marginTop: '64px',
        height: 'calc(100vh - 64px)'
    }
}));

const Main = ({menu}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const getContainer = () => {
        switch (menu) {
            case HOME:
                return <Home/>;
            case EXPLORE:
                return <Explore/>;
            case PROFILE:
                return <Profile/>;
            default:
                return <div/>
        }
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <HeaderPanel isOpen={open} handleDrawerOpen={handleDrawerOpen}/>
            <Menu isOpen={open} handleDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                {getContainer()}
            </main>
        </div>);
};

const mapStateToProps = state => ({
    menu: state.menu
});

export default connect(
    mapStateToProps
)(Main);

