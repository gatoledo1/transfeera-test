import { Route, Routes } from 'react-router-dom';
import NewPayee from './pages/NewPayee';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/new"
          element={
            <NewPayee />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
