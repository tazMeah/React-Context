import React from "react";
import AppChild from "./components/AppChild";
import DeliveryProvider from "./context/DeliveryProvider";

function App() {
	return (
		<div className="App">
			<DeliveryProvider>
				<AppChild />
			</DeliveryProvider>
		</div>
	);
}

export default App;
