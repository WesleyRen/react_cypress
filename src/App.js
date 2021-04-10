import React, {useState} from 'react';
import './App.css';
import Modal from './components/Modal';
import {SimpleForm} from './pages/SimpleForm';

function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="App">
            <h1>React Demo Stuff</h1>
            <button  onClick={e => setShowModal(true)}> show Modal </button>
            <Modal show={showModal} onClose={() => setShowModal(false)}/>

            <SimpleForm/>
        </div>
    );
}

export default App;
