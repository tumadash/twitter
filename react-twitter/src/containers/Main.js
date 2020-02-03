import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Menu} from "../components/Menu";
import {HeaderPanel} from "../components/HeaderPanel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import RecipeReviewCard from "./RecipeReviewCard";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
    },
}));

export const Main = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <HeaderPanel isOpen={open} handleDrawerOpen={handleDrawerOpen}/>
            <Menu isOpen={open} handleDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <RecipeReviewCard/>
                </Container>
            </main>

        </div>);
};
