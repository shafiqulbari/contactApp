import axios from "axios";

const BASE_URL = "http://localhost:5000/contacts";

export const getContacts = () => axios.get(BASE_URL);
export const addContact = (data) => axios.post(BASE_URL, data);
export const updateContact = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);
