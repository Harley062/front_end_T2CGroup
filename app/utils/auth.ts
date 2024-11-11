
export const getAccessToken = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('access_token');
    }
    return null;
  };
  
  export const saveAccessToken = (token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
    }
  };
  
  export const removeAccessToken = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }
  };
  
  export const isAuthenticated = (): boolean => {
    const token = getAccessToken();
    return token !== null; 
  };
  