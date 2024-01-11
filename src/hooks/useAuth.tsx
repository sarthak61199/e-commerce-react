import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext<{
  auth: { accessToken: string | null };
  setAuth: Dispatch<SetStateAction<{ accessToken: string | null }>>;
}>({
  auth: { accessToken: null },
  setAuth: () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState<{ accessToken: string | null }>({
    accessToken: null,
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export default useAuth;
