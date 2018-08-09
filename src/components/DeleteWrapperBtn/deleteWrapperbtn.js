import React from 'react';

import { inject, observer } from 'mobx-react';

const DeletWrapperBtn = inject('TodoStore')(observer(props => {
    const TodoStore = props.TodoStore;
    return (
        <div>
            <span onClick={() => { document.getElementById("id01").value = props.ip; document.getElementById('id01').style.display = 'block' }} className="fa fa-times" style={{ fontSize: '36px', color: '#369ef4' }}></span>
            <div>
                <div id="id01" className="w3-modal">
                    <div className="w3-modal-content">
                        <header className="w3-container " style={{ backgroundColor: '#369ef4', color: '#fff' }}>
                            <span onClick={() => document.getElementById('id01').style.display = 'none'}
                                className="w3-button w3-display-topright">&times;</span>
                            <h2>Delete</h2>
                        </header>
                        <div className="w3-container">
                            <p>Do you want to delete</p>
                        </div>
                        <footer className="w3-container" style={{ backgroundColor: '#369ef4' }}>
                            <button className='deletebutton' onClick={(event) => { TodoStore.deleteTodo(document.getElementById("id01").value); document.getElementById('id01').style.display = 'none' }}>Delete</button>
                        </footer>
                    </div>
                </div>

            </div>
        </div>
    )
}));

export default DeletWrapperBtn