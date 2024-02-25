import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const initialVal = JSON.parse(localStorage.getItem("page"));
  const [page, setPage] = useState(initialVal || 1);
  const [personId, setPersonId] = useState(null);
  const [isBio, setBio] = useState(false);

  const initialQuery = localStorage.getItem("searchQuery");
  const [searchQuery, setSearchQuery] = useState(initialQuery || "");

  return (
    <DataContext.Provider
      value={{
        isBio,
        setBio,
        personId,
        setPersonId,
        page,
        setPage,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("context was used outside the data provider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DataProvider, useData };
