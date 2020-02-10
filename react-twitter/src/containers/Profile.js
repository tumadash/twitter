import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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
        // maxHeight: "50%",
        padding: "5%",
        background: "linear-gradient(to bottom, #3f51b5, #fafafa)"
    },
    container: {
        width: "100%",
        maxWidth: "100%",
        padding: 0
    },
    username: {
        color: 'rgba(0,0,0,0.71)',
        padding: '25px'
    },
    status: {
        color: 'rgba(0,0,0,0.71)',
    }
}));

export const Profile = () => {
    const classes = useStyles();
    return (<Container  className={classes.container}>
        <Container className={classes.header}><Avatar
            src="https://kbdevstorage1.blob.core.windows.net/asset-blobs/19852_en_1"
            className={classes.avatar}/>
            <Typography align="center" variant={"h4"} className={classes.username}>Иванов Иван Иванович</Typography>
            <Typography align="center" variant={"h6"} className={classes.status}>Гений, миллиардер, плейбой,
                филантроп</Typography>
        </Container>
        <Container>
            <TextField label={"E-mail"}></TextField>
            <TextField label={"Login"}></TextField>
            <TextField label={"Password"} type={"password"}></TextField>
        </Container>
    </Container>);
};

