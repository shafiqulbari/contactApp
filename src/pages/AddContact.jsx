import { useContacts } from "../context/ContactContext";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {
  const { createContact } = useContacts();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;

    await createContact({
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      createdAt: new Date().toISOString(),
    });

    navigate("/");
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className="text-success mb-1">Add New Contact</p>
          <h1 className="h3 m-0">Create Contact</h1>
        </div>
        <Link to="/" className="btn btn-outline-secondary">
          ← Back
        </Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={submitHandler}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input name="firstName" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input name="lastName" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input name="phone" className="form-control" required />
              </div>

              <div className="col-12 d-flex justify-content-end gap-2 mt-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Add Contact
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
