import { useState } from "react";
import { useContacts } from "../context/ContactContext";
import ContactModal from "./ContactModal";

// Helper to generate initials
const initials = (firstName = "", lastName = "") =>
  `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();

const ContactCard = ({ contact }) => {
  const { removeContact } = useContacts();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("show"); // "show" | "edit"

  return (
    <>
      <div className="card shadow-sm mb-3">
        <div className="card-body d-flex align-items-center justify-content-between">
          {/* LEFT SIDE: Avatar + Details */}
          <div className="d-flex align-items-center">
            {/* Avatar */}
            <div
              className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: 54,
                height: 54,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {initials(contact.firstName, contact.lastName)}
            </div>

            {/* Space + Text */}
            <div style={{ marginLeft: 16 }}>
              <div className="fw-semibold fs-5">
                {contact.firstName} {contact.lastName}
              </div>
              <div className="text-muted">{contact.email}</div>
              <div className="text-muted">{contact.phone}</div>
            </div>
          </div>

          {/* RIGHT SIDE: Actions */}
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              title="Show"
              onClick={() => {
                setMode("show");
                setOpen(true);
              }}
            >
              👁
            </button>

            <button
              className="btn btn-outline-primary btn-sm"
              title="Edit"
              onClick={() => {
                setMode("edit");
                setOpen(true);
              }}
            >
              ✏
            </button>

            <button
              className="btn btn-outline-danger btn-sm"
              title="Delete"
              onClick={() => {
                if (confirm("Are you sure you want to delete this contact?")) {
                  removeContact(contact.id);
                }
              }}
            >
              🗑
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <ContactModal
          mode={mode}
          contact={contact}
          close={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ContactCard;
