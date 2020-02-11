import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: '300px',
        height: '300px',
        margin: 'auto',
        border: "10px solid #3f51b5"
    },
    header: {
        width: "100%",
        maxWidth: "100%",
        padding: "5%",
        paddingBottom: "3%",
        background: "linear-gradient(to bottom, #3f51b5, #fafafa)"
    },
    headContainer: {
        width: "100%",
        maxWidth: "100%",
        padding: 0
    },
    bodyContainer: {
        display: 'flex'
    },
    username: {
        color: 'rgba(0,0,0,0.71)',
        padding: '25px'
    },
    status: {
        color: 'rgba(0,0,0,0.71)',
    },
    panel: {
        color: '#3f51b5',
    },
    info: {
        alignSelf: 'stretch',
        width: '40%',
        margin: '0 auto',
        padding: '25px',
        flexDirection: 'column',
        display: 'flex'
    },
    footer: {
        paddingTop: '25px',
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 1
    },
    input: {
        width: '100%'
    },
    saveButton: {
        marginTop: 'auto'
    }
}));

export const Profile = () => {
    const classes = useStyles();
    return (<Container className={classes.headContainer}>
        <Container className={classes.header}><Avatar
            src="https://kbdevstorage1.blob.core.windows.net/asset-blobs/19852_en_1"
            className={classes.avatar}/>
            <Typography align="center" variant={"h4"} className={classes.username}>Иванов Иван Иванович</Typography>
            <Typography align="center" variant={"h6"} className={classes.status}>Гений, миллиардер, плейбой,
                филантроп</Typography>
        </Container>
        <Container className={classes.bodyContainer}>
            <Paper className={classes.info}>
                <Typography align="center" variant={"h6"} className={classes.panel}>Basic information</Typography>
                <div><TextField className={classes.input} label={"Full Name"}/></div>
                <div><TextField className={classes.input} label={"E-mail"}/></div>
                <div><TextField className={classes.input} label={"Login"}/></div>
                <div><TextField className={classes.input} label={"Password"} type={"password"}/></div>
                <div className={classes.footer}><Button variant={'contained'} color={'primary'}
                                                        startIcon={<SaveIcon/>}>Save</Button></div>
            </Paper>
            <Paper className={classes.info}>
                <Typography align="center" variant={"h6"} className={classes.panel}>Additional information</Typography>
                <div><TextField className={classes.input} label={"Gender"}/></div>
                <div><TextField className={classes.input} label={"City"}/></div>
                <div><TextField className={classes.input} label={"About"} multiline={true} rows={3}/></div>
                <div className={classes.footer}><Button className={classes.saveButton} variant={'contained'}
                                                        color={'primary'}
                                                        startIcon={<SaveIcon/>}>Save</Button></div>
            </Paper>
        </Container>
    </Container>);
};

