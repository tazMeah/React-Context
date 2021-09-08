import { useContext } from "react";
import { Delivery } from "../context/DeliveryProvider";

export default function AppGrandchild() {
	const { contextValue, myFunction } = useContext(Delivery);
	return (
		<div>
			<h1>{contextValue}</h1>
			<input
				onChange={(e) => {
					myFunction(e.target.value);
				}}
			/>
		</div>
	);
}
