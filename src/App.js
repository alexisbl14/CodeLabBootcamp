import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom";
import Home from "./components/Home";
import React from "react";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;