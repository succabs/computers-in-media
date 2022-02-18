import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Search from "./Components/Search"
import Logo from "./Components/Logo"
import Data from "./MOCK_DATA-2.json";
import { useState } from 'react';

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(Data, searchQuery);

  return (
    <div className="App">
    <Navbar />
      <Logo />
      <div>
            <Search 
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}/>
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>

      <Footer />
      </div>
  )
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