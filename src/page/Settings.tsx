import React, {useState} from "react";
import {CardContent, Grid, IconButton, makeStyles, Theme} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {validateForm} from "../components/validateForm/validateForm";
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#fff',
        },
        textField: {
            marginTop: 5
        },
        content: {
            marginTop: 40
        }
        }
    )
)

const initialState = {
    email: {
        status: false,
        message: ''
    },
}

export function SettingsComponents (props: any){
    const classes = useStyles()
    const [errorForm, setError] = useState(initialState);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)

    const handleChange = (e: any, cb: any) => {
        const {name, value} = e.currentTarget;
        const infoValid = validateForm(name, value)
        setError({...errorForm, [name]: {status: infoValid.error, message: infoValid.errorMessage}});
        return cb
    }

    const handleEditEmail = () => {
        setIsDisabled(false)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13 || e.which === 13) {
            // handleSendEmail();
            if(!errorForm.email.status && email.trim() ) {
                console.log(e)
            }

        }
    };

    return <div className={classes.content}>
        <Grid container spacing={3}>
            <Grid item xs={5}>
                <div>
                    <Typography variant="inherit">Name</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        id="name"
                        name="name"
                        className={classes.textField}
                        type="text"
                        size={"small"}
                        placeholder="Name"
                        value={name}
                        margin="normal"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Typography variant="body2" color="textSecondary" component="p" >
                        The name will be shown on your pages
                    </Typography>
                </div>
                <div style={{marginTop: 30}}>
                    <Typography variant="inherit" >
                        E-mail
                    </Typography>
                    <TextField
                        error={errorForm.email.status}
                        helperText={errorForm.email.message}
                        variant="outlined"
                        fullWidth
                        value={email}
                        id="email"
                        className={classes.textField}
                        name="email"
                        type="email"
                        disabled={isDisabled}
                        InputProps={{
                            endAdornment:  <IconButton aria-label="delete" onClick={handleEditEmail} size={"small"}>
                                <EditIcon color={"primary"}/>
                            </IconButton>,
                        }}
                        size={"small"}
                        placeholder="Email"
                        margin="normal"
                        onChange={(e) => handleChange(e, setEmail(e.target.value))}
                        onKeyPress={(e)=>handleKeyPress(e)}
                    />
                    <Typography variant="body2" color="textSecondary" component="p" >
                        Mail is required for the full functionality of your account
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
}

