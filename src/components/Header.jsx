import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <header className="bg-blue-500 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
