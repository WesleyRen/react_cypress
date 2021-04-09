import React from "react";
import './modal.css';

export default function Modal({show, onClose}) {
    const localOnClose = e => {
        onClose && onClose(e);
    };

    if (show) {
        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <h1>Modal Here</h1>
                    <button onClick={localOnClose}>Close Modal</button>
                </div>
            </section>
        );
    }
    return null
}
