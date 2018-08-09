import React from 'react';

export default function ButtonWrapper(props) {
    const { mode, changeMode } = props;

    return (
        <div>
            <span onClick={() => document.getElementById('id01').style.display = 'block'} className="fa fa-times" style={{ fontSize: '36px', color: '#369ef4' }}></span>
            <span onClick={() => document.getElementById('id02').style.display = 'block'} className="fa fa-edit" style={{ fontSize: '36px', color: '#369ef4', padding: 5 }}></span>
        </div>
    );
}