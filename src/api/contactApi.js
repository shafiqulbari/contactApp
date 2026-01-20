import axios from "axios";

const isProd = import.meta.env.PROD;
const envUrl = import.meta.env.VITE_API_URL;

// In production, NEVER fall back to localhost (it triggers local network warnings)
if (isProd && !envUrl) {
  throw new Error("VITE_API_URL is not set in production.");
}

const API_BASE = envUrl || "http://localhost:5000";
const BASE_URL = `${API_BASE}/contacts`;

export const getContacts = () => axios.get(BASE_URL);
export const addContact = (data) => axios.post(BASE_URL, data);
export const updateContact = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);
