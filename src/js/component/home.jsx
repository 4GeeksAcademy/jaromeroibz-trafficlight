import React, { useState } from "react";

function Home (){
	const [Color, setColor] = useState("red");

	return (
		<div className="trafficlight">
			<div onClick = {() => setColor("red")} className={ "luz roja" + (Color === "red" ? " brillar" : "") }></div>
			<div onClick = {() => setColor("yellow")} className={ "luz amarilla" + (Color === "yellow" ? " brillar" : "") }></div>
			<div onClick = {() => setColor("green")} className={ "luz verde" + (Color === "green" ? " brillar" : "") }></div>

		</div>
	);
};

export default Home;
