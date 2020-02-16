import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {setOpen} from "../store/newPostState/actions";
import Container from "@material-ui/core/es/Container/Container";
import TextField from "@material-ui/core/es/TextField/TextField";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import {addNews} from "../store/news/actions";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    input: {
        width: '100%'
    },
    container: {
        maxWidth: '100%',
        margin: '25px 0'
    },
    button: {
        marginTop: '25px'
    },
    image: {
        minWidth: '500px',
        minHeight: '500px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const NewPost = ({newPostState, setOpen, currentUser, addNews}) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };
    let [text, setTextState] = useState('');
    let [image, setImageState] = useState('');

    const setText = (e) => {
        setTextState(e.target.value)
    };

    const handleCapture = ({target}) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            setImageState(e.target.result);
        };
    };

    const save = () => {
        const date = Date.now();
        const id = date + currentUser.email;
        const news = {id, image, text, date, user: currentUser, followers: []};
        // news.push(id, {image, text, date});
        addNews(news);
    };

    return (<Dialog fullScreen open={newPostState} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    New post
                </Typography>
                <Button autoFocus color="inherit" onClick={() => {
                    handleClose();
                    save()
                }}>
                    save
                </Button>
            </Toolbar>
        </AppBar>
        <Container className={classes.container}>
            <Card className={classes.card}>
                {image ? <CardMedia
                    className={classes.image}
                    image={image}
                /> : ''}
                <CardContent className={classes.content}>
                    <TextField className={classes.input} label={"Text"} multiline={true} rows={4}
                               inputProps={{maxLength: 250}}
                               value={text} variant="outlined"
                               onChange={setText}/>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined" color="primary"
                        component="label"
                        className={classes.button}
                    >
                        Upload image
                        <input
                            onChange={handleCapture}
                            accept="image/*"
                            type="file"
                            style={{display: "none"}}
                        />
                    </Button>
                </CardActions>
            </Card>
        </Container>
    </Dialog>);
};

const mapStateToProps = state => ({
    newPostState: state.newPostState,
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    setOpen: state => dispatch(setOpen(state)),
    addNews: news => dispatch(addNews(news))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPost);
