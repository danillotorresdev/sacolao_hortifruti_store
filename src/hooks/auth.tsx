import React, { createContext, useCallback, useState, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@SH:user');

    if (user) {
      return { user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const useData: User = {
      email: 'danillo@company.com',
      password: '123456',
      id: '123456',
      name: 'Danillo',
    };

    if (useData.email === email && useData.password === password) {
      localStorage.setItem('@SH:user', JSON.stringify(useData));
      setData({ user: useData });
    } else {
      throw new Error();
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SH:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
