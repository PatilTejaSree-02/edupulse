import { createContext, useContext, useEffect, useState } from 'react';
import { API_BASE, login } from './api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/v1/me`, { credentials: 'include' })
      .then(r => r.json())
      .then(data => setUser(data.authenticated ? { username: data.username } : null))
      .finally(() => setLoading(false));
  }, []);

  const signIn = async (username, password) => {
    await login(username, password);
    const me = await fetch(`${API_BASE}/api/v1/me`, { credentials: 'include' }).then(r => r.json());
    setUser(me.authenticated ? { username: me.username } : null);
    return me;
  };

  const value = { user, setUser, loading, signIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) {
    window.location.href = '/signin';
    return null;
  }
  return children;
};


