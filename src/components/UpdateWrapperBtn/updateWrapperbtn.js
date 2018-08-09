import React from 'react';

import { inject, observer } from 'mobx-react';

const UpdateWrapperBtn = inject('TodoStore')(observer(props => {
    const TodoStore = props.TodoStore;
    return (
        <div>
            <span onClick={() => { document.getElementById("id02").value = props.data; document.getElementById('id02').style.display = 'block' }} className="fa fa-edit"></span>
            <div>

                <div id="id02" className="w3-modal">
                    <div className="w3-modal-content">
                        <header className="w3-container">
                            <span onClick={() => document.getElementById('id02').style.display = 'none'}
                                className="w3-button w3-display-topright">&times;</span>
                            <h2>Todo</h2>
                        </header>
                        <div className="w3-container">
                            <input
                                type="text" autoFocus
                                defaultValue={props.todo.title}
                                onKeyUp={(event) => {
                                    if (event.key === 'Enter') {
                                        TodoStore.doneEdit(props.todo, event);
                                    } else if (event.key === 'Escape') {
                                        TodoStore.cancelEdit(props.todo, event);
                                    }
                                }}
                            />
                        </div>
                        <footer className="w3-container">
                            <button className='deletebutton' onClick={(event) => TodoStore.doneEdit(document.getElementById("id02").value, event, document.getElementById("id02").value.id)}>Update</button>
                        </footer>
                    </div>
                </div>

            </div>
        </div>
    )
}));

export default UpdateWrapperBtn