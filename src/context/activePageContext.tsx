'use client'
import { createContext, useState } from "react";

type contextProviderType = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}
export const activeContext = createContext<contextProviderType | null>(null);

function activePageContext({
  children,
}: {
  children: React.ReactNode;
}) {

  const [activePage, setActivePage] = useState('home');

  return (
    <activeContext.Provider value={{activePage, setActivePage}}>
      {children}
    </activeContext.Provider>
  );
}

export default activePageContext;