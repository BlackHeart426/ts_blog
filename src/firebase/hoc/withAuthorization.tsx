import React, {Component} from "react";
import { auth } from "../firebaseService";
import {Redirect} from "react-router-dom";
import {HOME} from "../../routes/routes";
import {connect} from "react-redux";
import {isAuthorization} from "../../store/action/authorization";
import functions from "firebase";

interface IProp {
    authUser?: any;
}
interface IState {
    authUser?: any;
}

export const withAuthorization = (Component: any) => {
    return class WithAuthorization extends React.Component<IProp, IState> {
        private unsubscriber: any;
        constructor(props: any) {
            super(props);

            this.state = {
                authUser: null
            };

        }


        public componentDidMount(): void {
            this.unsubscriber = auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState(() => ({ authUser }))
                    : this.setState(() => ({ authUser: null }));

            })
        }

        public componentWillUnmount(): void {
            this.unsubscriber();
        }

        public render() {
            const { authUser } = this.state;
            if(!authUser ) {
                return <Redirect to={HOME}/>
            }
            return (
                <Component authUser={authUser} />
            )
        }
    }
}