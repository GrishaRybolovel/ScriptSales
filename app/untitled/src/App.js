import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {DataProvider} from "./utils/DataContext";
import './App.css';  // Global styles
import AdminPanel from './containers/AdminPanel/AdminPanel';

function App() {
  return (
      <DataProvider>
    <div className="App">
          <Router>
              <Routes>
                  <Route exact path="/" element={<AdminPanel/>} />
              </Routes>
          </Router>
    </div>
          </DataProvider>
  );
}

export default App;