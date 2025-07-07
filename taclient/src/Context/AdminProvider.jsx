import React, { createContext, useState } from "react";

export const AdminContext = createContext();

function AdminProvider({ children }) {

  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem('isAdmin')!==null);

  const getAdmin = () => {
    let adminVar = sessionStorage.getItem("isAdmin");
    console.log(adminVar);
    setIsAdmin(adminVar)
  }

  const getRidofAdmin = () => {
    sessionStorage.removeItem("isAdmin")
    sessionStorage.removeItem("loginToken")
    setIsAdmin(false);
  }

  return (
    <AdminContext.Provider value={{ isAdmin, getAdmin, getRidofAdmin}}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
