import { createContext, type FC, type PropsWithChildren, useContext } from 'react';

interface AppContextProps {
	description: string;
	email: string;
	linkedIn: string;
	name: string;
	shortTitle: string;
	siteUrl: string;
	title: string;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const value: AppContextProps = {
		description: 'Giving Life to PCB.',
		email: 'dolly.mitra@thepcbstudio.com',
		linkedIn: 'https://www.linkedin.com/in/dolly-mitra/',
		name: 'Dolly Mitra',
		shortTitle: 'ThePCBStudio',
		siteUrl: process.env.NODE_ENV === 'production' ? 'https://thepcbstudio.com' : 'http://localhost:5173',
		title: 'ThePCBStudio – Giving Life to PCB',
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	const value = useContext(AppContext);

	if (value === undefined) {
		throw new Error('useAppContext must be used within an AppContextProvider');
	}

	return value;
};
