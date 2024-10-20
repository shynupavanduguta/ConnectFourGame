import React from "react";
// import './Slot.css'; // Make sure to import your CSS file for styles

const Slot = ({ ch, x, onClick }) => {
    return (
        <div className={`slot ${ch}`} onClick={onClick}>
            {ch}
        </div>
    );
};

export default Slot;
