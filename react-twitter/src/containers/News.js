import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./RecipeReviewCard";
import React from "react";

export const News = ({news}) => {
    return (<Grid>
        {news.map(value => (<Grid key={value}><RecipeReviewCard/></Grid>))}
    </Grid>);
};
