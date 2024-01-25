import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Zmiana importu
import Index1 from './Index1';
import Index2 from './Index2';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/index1">Index 1</Link>
            </li>
            <li>
              <Link to="/index2">Index 2</Link>
            </li>
          </ul>
        </nav>

        <hr />

	<Switch> {/* Zmiana na Route */}
          <Route path="/index1">
            <Index1 />
          </Route>
          <Route path="/index2">
            <Index2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
