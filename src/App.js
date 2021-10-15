import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='classBox'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Catálogo
          </a>
          <FontAwesomeIcon icon={faEnvelope} />

        </div>
        <div className='classBox'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Email
          </a>
          <FontAwesomeIcon icon={faEnvelope} />

        </div>
        <div className='classBox'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            WhatsApp
          </a>
          <FontAwesomeIcon icon={faEnvelope} />

        </div>
        <div className='classBox'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <FontAwesomeIcon icon={faEnvelope} />

        </div>
      </header>
    </div>
  );
}

export default App;
