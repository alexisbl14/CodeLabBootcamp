import "../css/Navbar.css";
import { Button, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import Wishlist from "./Wishlist";
import logo from "../logo.png";

function Navbar() {
	const [showWishlist, setShow] = useState(false);
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	return (
		<div className="navbar">
			<Row className="nav-row">
				<Col md={2} className="nav-col">
					<a href="https://www.codelabdavis.com">
						<img src={logo} alt="Codelab Logo" />
					</a>
				</Col>

				<Col md={2} className="nav-col">
					<Button onClick={handleShow}>View Wishlist</Button>
				</Col>
			</Row>
			<Wishlist displayModal={showWishlist} close={handleClose}/>
		</div>
	);
}

export default Navbar;