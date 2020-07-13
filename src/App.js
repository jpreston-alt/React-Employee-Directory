import React from 'react';
import './index.css';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import ResultsTable from './components/ResultsTable';

function App() {
  return (
    <div>
      <Header />
      <div className="uk-container">
        <SearchForm />
        <ResultsTable />
      </div>
    </div>
  );
}

export default App;
