import React, { ReactNode, useState } from "react";
interface ContextProps {
	contextValue: string;
	myFunction: (words: string) => void;
}
const defaultValues: ContextProps = {
	contextValue: "",
	myFunction: () => {},
};

export const Delivery = React.createContext<ContextProps>(defaultValues);

export default function DeliveryProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [contextValue, setContextValue] = useState("Amazon");
	function myFunction(words: string) {
		setContextValue(words);
	}
	return (
		<Delivery.Provider value={{ contextValue, myFunction }}>
			{children}
		</Delivery.Provider>
	);
}
