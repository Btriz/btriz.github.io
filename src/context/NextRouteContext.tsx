import { createContext, useContext, useState } from 'react';

type NextRouteContextType = {
  nextRoute: string | null;
  setNextRoute: (_route: string | null) => void;
}

const NextRouteContext = createContext<NextRouteContextType>({
  nextRoute: null,
  setNextRoute: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useNextRoute = () => useContext(NextRouteContext);

export const NextRouteProvider = ({ children }: { children: React.ReactNode }) => {
  const [nextRoute, setNextRoute] = useState<string | null>(null);

  return (
    <NextRouteContext.Provider
      value={{
        nextRoute,
        setNextRoute,
      }}
    >
      {children}
    </NextRouteContext.Provider>
  );
};
