import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from "./components/SignUp"
import Home from "./components/Home"

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route exact path="/">
              <Home/>
            </Route>
          </Routes>

          <Routes>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
