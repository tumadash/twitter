import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import {connect} from "react-redux";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {editUser} from "../store/users/actions";
import {setCurrentUser} from "../store/currentUser/actions";

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
        overflow: 'hidden',
        textOverflow: 'ellipse'
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

const Profile = ({currentUser, editUser, setCurrentUser}) => {
    const classes = useStyles();

    let [firstName, setFirstNameState] = useState(currentUser.firstName);
    let [lastName, setLastNameState] = useState(currentUser.lastName);
    let [email, setEmailState] = useState(currentUser.email);
    let [password, setPasswordState] = useState(currentUser.password);

    let [gender, setGenderState] = useState(currentUser.gender);
    let [city, setCityState] = useState(currentUser.city);
    let [about, setAboutState] = useState(currentUser.about);

    const setLastName = (e) => {
        setLastNameState(e.target.value)
    };
    const setFirstName = (e) => {
        setFirstNameState(e.target.value)
    };
    const setEmail = (e) => {
        setEmailState(e.target.value)
    };
    const setPassword = (e) => {
        setPasswordState(e.target.value)
    };

    const setGender = (e) => {
        setGenderState(e.target.value)
    };
    const setCity = (e) => {
        setCityState(e.target.value)
    };
    const setAbout = (e) => {
        setAboutState(e.target.value)
    };

    const saveBasic = () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            gender: currentUser.gender,
            city: currentUser.city,
            about: currentUser.about
        };
        editUser(newUser);
        setCurrentUser(newUser);
    };

    const saveAdditional = () => {
        const newUser = {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            password: currentUser.password,
            gender,
            city,
            about
        };
        editUser(newUser);
        setCurrentUser(newUser);
    };

    return (<Container className={classes.headContainer}>
        <Container className={classes.header}><Avatar
            src="https://kbdevstorage1.blob.core.windows.net/asset-blobs/19852_en_1"
            className={classes.avatar}/>
            <Typography align="center" variant={"h4"}
                        className={classes.username}>{currentUser.lastName} {currentUser.firstName}</Typography>
            <Typography align="center" variant={"h6"}
                        className={classes.status}>{currentUser.about ? currentUser.about : "_____________________"}</Typography>
        </Container>
        <Container className={classes.bodyContainer}>
            <Paper className={classes.info}>
                <Typography align="center" variant={"h6"} className={classes.panel}>Basic information</Typography>
                <div><TextField className={classes.input} label={"First Name"} value={firstName}
                                onChange={setFirstName}/></div>
                <div><TextField className={classes.input} label={"Last Name"} value={lastName} onChange={setLastName}/>
                </div>
                <div><TextField className={classes.input} disabled label={"E-mail"} value={email} onChange={setEmail}/></div>
                <div><TextField className={classes.input} label={"Password"} type={"password"} value={password}
                                onChange={setPassword}/></div>
                <div className={classes.footer}><Button className={classes.saveButton} variant={'contained'}
                                                        color={'primary'}
                                                        startIcon={<SaveIcon/>} onClick={saveBasic}>Save</Button></div>
            </Paper>
            <Paper className={classes.info}>
                <Typography align="center" variant={"h6"} className={classes.panel}>Additional information</Typography>
                <div><RadioGroup defaultValue={gender} onChange={setGender} row>
                    <FormControlLabel control={<Radio></Radio>} label={'female'} value={'female'}></FormControlLabel>
                    <FormControlLabel control={<Radio></Radio>} label={'male'} value={'male'}></FormControlLabel>
                </RadioGroup></div>
                <div><TextField className={classes.input} label={"City"} value={city} onChange={setCity}/></div>
                <div><TextField className={classes.input} label={"About"} multiline={true} rows={3} inputProps={{maxLength:250}}  value={about}
                                onChange={setAbout}/>
                </div>
                <div className={classes.footer}><Button className={classes.saveButton} variant={'contained'}
                                                        color={'primary'}
                                                        startIcon={<SaveIcon/>} onClick={saveAdditional}>Save</Button>
                </div>
            </Paper>
        </Container>
    </Container>);
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    editUser: user => dispatch(editUser(user)),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);


