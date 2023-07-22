import React, {useState, createContext, useContext} from 'react';

export const AuthContext = createContext({
  authState: {id: '', signedIn: false, token: null},
  setAuthState: () => {},
});

export const AuthContextProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    id: '',
    signedIn: false,
    token: null,
  });
  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};
