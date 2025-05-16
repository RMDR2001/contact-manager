import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Obtener del localStorage o usar el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error al leer del localStorage:', error);
      return initialValue;
    }
  });

  // Actualizar localStorage cuando el valor cambie
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;