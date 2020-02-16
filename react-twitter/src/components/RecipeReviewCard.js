import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from "react-redux";
import {dislike, like} from "../store/news/actions";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '75%',
        margin: "25px auto"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    content: {
        textOverflow: 'collapse'
    }
}));

const RecipeReviewCard = ({newsItem, like, dislike, currentUser}) => {
    const classes = useStyles();
    let likeParam = false;
    if (newsItem.followers.includes(currentUser.email)) {
        let likeParam = true;
    }
    let [isLike, setLikeEvents] = useState(likeParam);

    const formatDate = (date) => {
        date = new Date(date);
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
    };

    const setLikeEvent = () => {
        if (isLike) {
            dislike({email: currentUser.email, id: newsItem.id});
            setLikeEvents(false);
        } else {
            like({email: currentUser.email, id: newsItem.id});
            setLikeEvents(true);
        }


    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {newsItem.user.avatar}
                    </Avatar>
                }
                title={newsItem.user.lastName + ' ' + newsItem.user.firstName}
                subheader={formatDate(newsItem.date)}
            />
            <CardMedia
                className={classes.media}
                image={newsItem.image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                    {newsItem.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={setLikeEvent}>
                    <FavoriteIcon style={{color: isLike ? 'red' : ''}}/>
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                    {newsItem.followers.length}
                </Typography>
            </CardActions>
        </Card>
    );
}
const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    like: state => dispatch(like(state)),
    dislike: state => dispatch(dislike(state))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeReviewCard);