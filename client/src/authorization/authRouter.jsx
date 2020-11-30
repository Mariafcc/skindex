import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthDataContext} from "./authWrapper";

const AuthRouter = ({ component: Component, roles, ...rest }) => {
	const authContext = useContext(AuthDataContext);
	const { loading } = authContext;
	if (loading) {
		return (
			<Route
				{...rest}
				render={() => {
					return <p>Loading...</p>;
				}}
			/>
		);
	}
	return (
		<Route
			{...rest}
			render={(routeProps) => {
				const currentUser = authContext.user;
				if (!currentUser){
					return <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
				}
				return <Component {...routeProps} />
			}}
		/>

	);
};

export default AuthRouter;
