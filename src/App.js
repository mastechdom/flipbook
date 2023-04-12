// import Pages from './PDF_TO_Flipbook/Sample';
import Pages from './book1';
import AudioPlayer from './Audio';
import NavBar from './NavigationBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <NavBar />
      </div>
      <div className='player'>
        <AudioPlayer />
      </div>
      <div className='book'>
        <Pages />
      </div>
    </div>
  );
}

export default App;
