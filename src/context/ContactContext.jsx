import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/contactApi";

const ContactContext = createContext();
export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const fetchContacts = async () => {
    const res = await api.getContacts();
    setContacts(res.data);
  };

  const createContact = async (data) => {
    await api.addContact(data);
    fetchContacts();
  };

  const editContact = async (id, data) => {
    await api.updateContact(id, data);
    fetchContacts();
  };

  const removeContact = async (id) => {
    await api.deleteContact(id);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        search,
        filter,
        setSearch,
        setFilter,
        createContact,
        editContact,
        removeContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
