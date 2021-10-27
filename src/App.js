import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SearchContainer from "./Components/SearchContainer"
import Naruto from "./Components/Naruto"
function App() {
  return (
    <div className="App">
    <Navbar />
      <Naruto />
      <SearchContainer />
      <Footer />
      </div>
  )
}

export default App;
