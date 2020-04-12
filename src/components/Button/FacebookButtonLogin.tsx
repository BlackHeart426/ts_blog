import React from "react";
import {SocialButtonStyle} from "./SocialButtonStyle";
import {blue} from "@material-ui/core/colors";
import FacebookIcon from '@material-ui/icons/Facebook';

export function FacebookButtonLogin(props: any) {
    const colorButton =  blue[500]
    const colorButtonHover =  blue[700]
    const icon = <FacebookIcon  fontSize="large"/>

    const handleConnection = (name: any) => {
        console.log(name)
    }

    return (
        <SocialButtonStyle
            onConnection={() => handleConnection('twitter')}
            colorButton={colorButton} 
            colorButtonHover={colorButtonHover}
            icon={icon} />
    )
}