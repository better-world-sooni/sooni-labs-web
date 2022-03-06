/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import Div from "./Div";

const BasicHeadWrapper = ({ children }) => {
	return (
		<>
			<Head>
				<title>Sooni Labs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>{children}</body>
		</>
	);
};

export default BasicHeadWrapper;