import axios from "axios";

// Use Netlify env in production, localhost in dev
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BASE_URL = `${API_BASE}/contacts`;

export const getContacts = () => axios.get(BASE_URL);
export const addContact = (data) => axios.post(BASE_URL, data);
export const updateContact = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);
