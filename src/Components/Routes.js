import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Confirm from "../Routes/Cofirm";
import KakaoMap from "../Routes/KakaoMap";

const LoggedInRoutes = () => (
    <Switch>
        <Route path="/" component={KakaoMap} />
        <Route path="/confirm" component={Confirm} />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route path="/" component={KakaoMap} />
    </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;