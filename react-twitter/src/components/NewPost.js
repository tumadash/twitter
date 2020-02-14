import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {editUser} from "../store/users/actions";
import {setCurrentUser} from "../store/currentUser/actions";
import {connect} from "react-redux";
import {setOpen} from "../store/newPostState/actions";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const NewPost = ({newPostState, setOpen}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (    <Dialog fullScreen open={newPostState} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                    save
                </Button>
            </Toolbar>
        </AppBar>
        <List>
            <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
        </List>
    </Dialog>);
};

const mapStateToProps = state => ({
    newPostState: state.newPostState
});

const mapDispatchToProps = dispatch => ({
    setOpen: state => dispatch(setOpen(state))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPost);
