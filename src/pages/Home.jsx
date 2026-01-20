import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import ContactList from "../components/ContactList";

const Home = () => {
  return (
    <>
      <Header />
      <SearchFilter />
      <div className="container pb-4">
        <ContactList />
      </div>
    </>
  );
};

export default Home;
