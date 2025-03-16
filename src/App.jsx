import "./App.css"; // Import the CSS file for styling
import Bookshelf from "./components/Bookshelf/Bookshelf.jsx"; // Import the Bookshelf component from the nested components folder

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
