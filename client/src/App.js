import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import ResultList from './components/ResultList/ResultList'
import UploadModal from './components/UploadModal/UploadModal'

function App() {
  const [searchText, setSearchText] = useState("")
  const [results, setResults] = useState([])
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  const getImages = () => {
    (async () => {
      try {
        const {images} = await (await fetch("/search")).json()
        return setResults(images)
      } catch(e) {
        console.log(e)
      }
    })()
  }

  useEffect(() => getImages(), [searchText])
  return (
    <main className="App">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setUploadModalOpen={setUploadModalOpen}/>
      <ResultList results={results}/>
      <UploadModal
        isUploadModalOpen={isUploadModalOpen}
        setUploadModalOpen={setUploadModalOpen}/>
    </main>
  );
}

export default App;
