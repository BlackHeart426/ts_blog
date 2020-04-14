import React, {useState} from "react";
import {useParams} from "react-router";
import { AvatarUser } from "../components/pageShablons/AvatarUser";
import {ReactComponent} from "*.svg";
import {CoverContent} from "../components/pageShablons/CoverContent";
import {AboutUserCard} from "../components/pageShablons/AboutUserCard";
import {LevelSubscribe} from "../components/pageShablons/LevelSubscribe";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button, FormControl, Grid, Paper} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import {Tasks} from "../components/pageShablons/Tasks";
import { Posts } from "../components/pageShablons/Posts";

interface ParamTypes {
    userId: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            backgroundImage: {
                position: 'relative',
                width: '100%',
                height: '310px',
                top: '0',
                left: '0',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/ts-blog-45eb9.appspot.com/o/logo%2Fbackground_065.jpg?alt=media&token=7c4b3ee2-9e75-42f2-97ab-5f17c5b31989)",
            },
            layout : {
                // position: 'relative',
                minWidth: '1240px',
                flex: '1',
            },
            content : {
                marginTop: '15px',
                width: '1240px',
                margin: '0 auto',
                paddingBottom: '20px'
            },
            contentInfo : {
                width: '1240px',
                margin: '0 auto',
                paddingBottom: '20px',
                paddingTop: '195px',

                color: 'white'
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            contentAvatar: {
                position: 'absolute',
                top: '100px',

            }
        }
    )
)

export const ShablonPage: React.FC = () => {
    const {userId} = useParams<ParamTypes>()
    const classes = useStyles()
    const [state, setState] = useState({editable: false})

    return (
        <>
            <div className={classes.layout}>
                <div className={classes.backgroundImage}>
                    {state.editable && <Button
                        disableElevation
                        variant="contained"
                        style={{background: '#fff', position: "absolute", right: 300, marginTop: 40}}
                        color="inherit">
                        <strong>Change background</strong>
                    </Button>
                    }
                    <div className={classes.contentInfo}>
                        <CoverContent/>
                    </div>

                </div>
                <div className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <div className={classes.contentAvatar}>
                                <AvatarUser/>
                                <Tasks/>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <AboutUserCard/>
                            <Posts/>
                        </Grid>
                        <Grid item xs={3}>
                            <LevelSubscribe />
                        </Grid>
                    </Grid>

                    <div className="row">
                        <div className="col s3 plAvatar">
                            {/*<AvatarUser/>*/}
                        </div>
                        <div className="col s6">
                            {/*<AboutUserCard/>*/}
                        </div>
                        <div className="col s3">
                            {/*<LevelSubscribe/>*/}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}