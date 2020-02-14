import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./RecipeReviewCard";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import NewPost from "./NewPost";
import SaveIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button";
import {setOpen} from "../store/newPostState/actions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    empty: {
        display: 'flex',
        color: '#757575',
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));
const News = ({news, setOpen}) => {
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (<div>
        <Button className={classes.saveButton} variant={'contained'}
                color={'primary'}
                startIcon={<SaveIcon/>} onClick={handleClickOpen}>New post</Button>
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
