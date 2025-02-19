import { createContext, useState } from "react";

//crear contexto
export const FiltersContext = createContext();

//crear provider para proveer el contexto
export function FiltersProvider({ children }) {
  const [ filter, setFilter] = useState({
    category: 'all',
    minPrice: 0,
  })
  return (
    <FiltersContext.Provider
      value={{
        filter,
        setFilter
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
