import Functionality from "./functionality/funct.js";
import Home from "./home/home.js"
import Nav from "./nav/nav.js"
import Post from "./Post/Post.js"


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">

        <Home />
        <Functionality />
        <Post/>
      </div>
    </div>
  );
}

export default App;
