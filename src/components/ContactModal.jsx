import { useContacts } from "../context/ContactContext";

const ContactModal = ({ mode, contact, close }) => {
  const { editContact } = useContacts();

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    editContact(contact.id, {
      ...contact,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
    });

    close();
  };

  return (
    <div className="ca-modal-backdrop" onClick={close}>
      <div className="ca-modal" onClick={(e) => e.stopPropagation()}>
        <h5 className="mb-3">
          {mode === "edit" ? "Edit Contact" : "Contact Details"}
        </h5>

        <form onSubmit={submitHandler}>
          {["firstName", "lastName", "email", "phone"].map((field) => (
            <div className="mb-2" key={field}>
              <input
                name={field}
                className="form-control"
                defaultValue={contact[field]}
                disabled={mode !== "edit"}
                required
              />
            </div>
          ))}

          <div className="d-flex justify-content-end gap-2 mt-3">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Close
            </button>
            {mode === "edit" && (
              <button className="btn btn-success">Update</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
