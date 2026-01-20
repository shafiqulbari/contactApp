import { useContacts } from "../context/ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, search, filter } = useContacts();

  let data = contacts.filter((c) =>
    `${c.firstName} ${c.lastName} ${c.email} ${c.phone}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  if (filter === "first")
    data.sort((a, b) => a.firstName.localeCompare(b.firstName));
  if (filter === "last")
    data.sort((a, b) => a.lastName.localeCompare(b.lastName));
  if (filter === "old")
    data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  if (data.length === 0) {
    return <h4 className="text-center text-muted">No Contact Information</h4>;
  }

  return data.map((c) => <ContactCard key={c.id} contact={c} />);
};

export default ContactList;
