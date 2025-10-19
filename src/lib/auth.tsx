'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  loginAsUser: (userId: string) => void;
  logout: () => void;
  currentUserId: string;
  currentUserName: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

const VALID_CREDENTIALS = {
  email: 'admin@iit.ac.in',
  password: 'password123'
};

const DEFAULT_USER_ID = '9e92ed55-e15c-4cb1-b5ee-1e0278f38b35';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(DEFAULT_USER_ID);
  const [currentUserName, setCurrentUserName] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const savedUserId = localStorage.getItem('currentUserId');
    const savedUserName = localStorage.getItem('currentUserName');
    
    if (auth === 'true') {
      setIsAuthenticated(true);
      if (savedUserId) setCurrentUserId(savedUserId);
      if (savedUserName) setCurrentUserName(savedUserName);
    }
  }, []);

  const login = (email: string, password: string) => {
    const valid = email === VALID_CREDENTIALS.email && 
                  password === VALID_CREDENTIALS.password;
    if (valid) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('currentUserId', DEFAULT_USER_ID);
      localStorage.setItem('currentUserName', 'Liam Joshi');
      setIsAuthenticated(true);
      setCurrentUserId(DEFAULT_USER_ID);
      setCurrentUserName('Liam Joshi');
    }
    return valid;
  };

  const loginAsUser = (userId: string) => {
    // Get user name from users data
    import('@/lib/users.json').then(module => {
      const users = module.default;
      const user = users.find((u: any) => u.id === userId);
      const userName = user?.name || 'Unknown User';
      
      localStorage.setItem('auth', 'true');
      localStorage.setItem('currentUserId', userId);
      localStorage.setItem('currentUserName', userName);
      setIsAuthenticated(true);
      setCurrentUserId(userId);
      setCurrentUserName(userName);
    });
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserName');
    setIsAuthenticated(false);
    setCurrentUserId(DEFAULT_USER_ID);
    setCurrentUserName('');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      loginAsUser,
      logout,
      currentUserId,
      currentUserName
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};