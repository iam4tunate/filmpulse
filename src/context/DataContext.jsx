import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialVal = JSON.parse(localStorage.getItem("page"));
  const [page, setPage] = useState(initialVal || 1);

  return (
    <DataContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
