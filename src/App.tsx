import React, { useState } from 'react';
import styles from './App.module.scss';
import SearchResults from './Components/SearchResults/SearchResults';
import SearchForm from './Components/SearchForm/SearchForm';

function App() {
  const [term, setTerm] = useState("");
  const [prevTerm, setPrevTerm] = useState("");
  const [offset, setOffset] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value);
  const setPreviousTerm = (value: string) => {
    setPrevTerm(value);
  }
  const setOffsetCount = (value: number) => {
    setOffset(value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <SearchForm term={term} prevTerm={prevTerm} handleChange={handleChange} setPreviousTerm={setPreviousTerm} setOffsetCount={setOffsetCount} offset={offset} />
      </div>
      <div className={styles.searchResults}>
        <SearchResults term={term} prevTerm={prevTerm} handleChange={handleChange} setPreviousTerm={setPreviousTerm} setOffsetCount={setOffsetCount} offset={offset} />
      </div>
    </div>
  );
}

export default App;
