
import './App.css';
import { ControlledModal } from './ControlledModal';
import { useEffect, useState } from 'react';

// Controlled Modal
function App() {

  const [shouldShowModal, setShouldShowModal] = useState(false);

  return(
    <>
      <ControlledModal
         shouldShow={shouldShowModal}
         onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello !</h1>
      </ControlledModal> 
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        { shouldShowModal ? 'Hide Modal' : 'Show Modal' }
      </button>
    </>
  );
}

export default App;
