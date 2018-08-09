import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';
import { inject, observer } from 'mobx-react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Modal = inject('TodoStore')(observer(props => {
    const TodoStore = props.TodoStore;

    return (
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
    );
}));

Modal.wrappedComponent.propTypes = {
    todo: PropTypes.object.isRequired,
    TodoStore: PropTypes.object.isRequired,
};

export default Modal;