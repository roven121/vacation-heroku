export const getItemLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value !== null) return JSON.parse(value);
};
