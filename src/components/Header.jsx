import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="text-success mb-1">Contact Management</p>
          <h1 className="h3 m-0">Contact App</h1>
        </div>
        <Link to="/add" className="btn btn-success">
          Add New
        </Link>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default Header;
