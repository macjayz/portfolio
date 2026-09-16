import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, openMenu, closeMenu }), [isOpen, openMenu, closeMenu]);

  return <MenuContext value={value}>{children}</MenuContext>;
}

export function useMenu() {
  return useContext(MenuContext);
}
