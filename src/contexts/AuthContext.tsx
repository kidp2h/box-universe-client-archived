import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useLazyQuery, useQuery } from '@apollo/client';
import me from '@queries/me.graphql';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user: { _id: string; username: string; email: string } | null;
}>({ isAuthenticated: false, user: null });

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [getMe, { data }] = useLazyQuery(me);
  const accessToken = Cookies.get('accessToken');

  useEffect(() => {
    setUser(() => data);
  }, [data]);

  useEffect(() => {
    if (accessToken) {
      getMe();
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
