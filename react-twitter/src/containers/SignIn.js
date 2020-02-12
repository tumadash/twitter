import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from "../service/history";

const IMG = "data:image/png;base64,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";
const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                tumadash
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const login = () =>{
    history.push("/#/main");
};

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        height: "100px",
        width: "100px",
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignIn = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}
                        src = {IMG}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Twitter
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Логин"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={login}
                        className={classes.submit}
                    >
                        Войти
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
};
