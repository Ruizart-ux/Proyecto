import { createContext, useState, useMemo, useCallback } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(true);

    
    const toggleNavbar = useCallback(() => {
        setIsNavExpanded(prev => !prev);
    }, []);

    
    const contextValue = useMemo(() => ({
        isNavExpanded,
        toggleNavbar
    }), [isNavExpanded, toggleNavbar]);

    return (
        <NavbarContext.Provider value={contextValue}>
            {children}
        </NavbarContext.Provider>
    );
};