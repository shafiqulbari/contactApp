import { useContacts } from "../context/ContactContext";

const SearchFilter = () => {
  const { setSearch, setFilter } = useContacts();

  return (
    <div className="container mb-3">
      {/* g-3 creates a real gutter gap */}
      <div className="row g-3 align-items-stretch">
        {/* Keep them on one row by forcing col-8/col-4 */}
        <div className="col-8">
          <input
            className="form-control ui-control"
            placeholder="Search by first name, last name, email or phone..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-4">
          <select
            className="form-select ui-control"
            onChange={(e) => setFilter(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Filter
            </option>
            <option value="first">First Name (A → Z)</option>
            <option value="last">Last Name (A → Z)</option>
            <option value="old">Oldest To First</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
