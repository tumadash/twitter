import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./RecipeReviewCard";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import NewPost from "./NewPost";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Button from "@material-ui/core/Button";
import {setOpen} from "../store/newPostState/actions";
import {connect} from "react-redux";

const useStyles = makeStyles(() => ({
    empty: {
        display: 'flex',
        color: '#757575',
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    newPost: {
        position: 'absolute',
        right: '25px',
        backgroundColor: '#3f51b5',
        color: 'white',
        borderRadius: '50%',
        height: '60px'
    }
}));
const News = ({news, setOpen}) => {
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (<div>
        <Button color="primary" aria-label="add an alarm" className={classes.newPost} onClick={handleClickOpen}>
            <AddRoundedIcon fontSize={'large'}/>
        </Button>
        <NewPost/>
        <Grid>
            {news.length !== 0 ? news.map((value) => (<Grid key={value}><RecipeReviewCard newsItem={value}/></Grid>)) :
                <Typography variant={"h3"} className={classes.empty}>Новостей нет</Typography>}
        </Grid>
    </div>);
};

const mapDispatchToProps = dispatch => ({
    setOpen: state => dispatch(setOpen(state))
});

export default connect(
    null,
    mapDispatchToProps
)(News);
