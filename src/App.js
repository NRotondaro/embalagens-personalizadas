import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faClipboardList,
  faBroom,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='classBox'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1ijUuJXJVJobFuvUt7nW0zkqjYtN0aSrF/view?usp=sharing'
          >
            <h4 className='App-link' target='_blank' rel='noopener noreferrer'>
              Catálogo
            </h4>
            <FontAwesomeIcon color='black' icon={faClipboardList} size='3x' />
          </a>
        </div>
        <div className='classBox'>
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:contato@embalagenspersonalizadas.com'
          >
            <h4 className='App-link' target='_blank' rel='noopener noreferrer'>
              Email
            </h4>
            <FontAwesomeIcon color='black' icon={faEnvelope} size='3x' />
          </a>
        </div>
        <div className='classBox'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://wa.me/+5582988057662'
          >
            <h4 className='App-link' target='_blank' rel='noopener noreferrer'>
              WhatsApp
            </h4>
            <FontAwesomeIcon color='black' icon={faWhatsapp} size='3x' />
          </a>
        </div>
        <div className='classBox'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1eSugEmSkac5HjolPUaDwDUBFHFS1JULG/view?usp=sharing'
          >
            <h4 className='App-link' target='_blank' rel='noopener noreferrer'>
              Identidade Visual
            </h4>
            <FontAwesomeIcon color='black' icon={faBroom} size='3x' />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
