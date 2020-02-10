import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Menu} from "../components/Menu";
import HeaderPanel from "../components/HeaderPanel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import {News} from "./News";
import {connect} from "react-redux";
import {EXPLORE, HOME, PROFILE} from "../store/stateMenu/enum";
import {Profile} from "./Profile";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        width: '100%'
    },
    container: {
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
    },
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
    const getContainer = () =>{
        switch (menu) {
            case HOME: return <News news={[0,1,2]}/>;
            case EXPLORE: return <News news={[0]}/>;
            case PROFILE: return <Profile/>;
            default: return <div/>
        }
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <HeaderPanel isOpen={open} handleDrawerOpen={handleDrawerOpen}/>
            <Menu isOpen={open} handleDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                {/*<div className={classes.appBarSpacer}/>*/}

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

