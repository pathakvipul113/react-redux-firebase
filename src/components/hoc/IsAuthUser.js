import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const IsAuthUser = WrappedComponent => {

    const HOCComponent = (props) => {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }
        else {
            return <WrappedComponent {...props} />;
        }
    };

    const mapStateToProps = (state) => {
        return {
            auth: state.firebase.auth
        };
    };

    return connect(mapStateToProps)(HOCComponent);
};

export default IsAuthUser;