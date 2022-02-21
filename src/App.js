import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Search from "./Components/Search"
import Logo from "./Components/Logo"
import Data from "./MOCK_DATA-2.json";
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(Data, searchQuery);

  return <Router>
    <div className="App">
    <Navbar />
      <Logo />
      <div className="row text-center">
        <div className="col-sm-3"></div>
            <Search 
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}/>

<div className="col-sm-3">        </div>
</div>

<div className="row text-center">
        <div className="col-sm-3"></div>
        <div className="col-6 box">
                            <p><strong>Results matching your search:</strong></p>
                            
            <ul class="list list-group">

                { 
               filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>

                ))}
            </ul>
            </div>

            <div className="col-sm-3">        </div>
        </div>

      <Footer />
      </div>
  )
  </Router>
}

export default App;

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};