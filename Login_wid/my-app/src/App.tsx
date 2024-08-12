import React from "react";
import logo from "./logo.svg";
import "../src/css/App.css";
import { Route, Routes } from "react-router-dom";
import Login_page from "../src/component/login";
import Signup from "../src/component/signup";
import SellerReg from "./component/seller-register";
import UserReg from "./component/user-register";
function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Login_page />}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
			<Route
				path="/sellerRegistration"
				element={<SellerReg />}
			/>
			<Route
				path="/userRegistration"
				element={<UserReg />}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
			{/* <Route path="/register2" element={<Register2 />} />

			{/* <Route path="/dashboard" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorite" element={<FavoritePokemon />} />
      <Route path='/category/edit/:id' element={<EditCategory />} /> */}
		</Routes>
	);
}

export default App;
