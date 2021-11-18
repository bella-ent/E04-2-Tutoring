import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function User() {
	const { userData, setUserData } = useContext(UserContext);
	return <div></div>;
}

export default User;
