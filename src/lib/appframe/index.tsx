import { useState, ReactNode } from "react";
import { AppFrameContext } from "./context";

export interface AppFrameProps {
	children: ReactNode | undefined;
}

const AppFrame: React.FC<AppFrameProps> = ({ children }) => {
    const [maintenanceSwitch, setMaintenanceSwitch] = useState<boolean>(false);
	const updateMaintenanceSwitch = () => {
		setMaintenanceSwitch(prev => !prev);
	};

	return (
		<AppFrameContext.Provider value={{ maintenanceSwitch, updateMaintenanceSwitch }}>
			{children}
		</AppFrameContext.Provider>
	);
};

export { AppFrame };
