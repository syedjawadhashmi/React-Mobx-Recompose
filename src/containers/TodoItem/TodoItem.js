import React from 'react';
import { inject, observer } from 'mobx-react';
import { DeletWrapperBtn } from '../../components';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const TodoItem = inject('TodoStore')(observer(props => {
  const TodoStore = props.TodoStore;

  return (
    <div>
      <div key={props.todo.id} className='todo-list'>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <div className="deletebtn">
                {!props.todo.editing &&
                  <div
                    onDoubleClick={(event) => TodoStore.editTodo(props.todo, event)}
                  >
                    {props.todo.title}
                  </div>
                }

                {props.todo.editing &&
                  <input
                    className="todo-item-edit" type="text" autoFocus
                    defaultValue={props.todo.title}
                    onBlur={(event) => TodoStore.doneEdit(props.todo, event)}
                    onKeyUp={(event) => {
                      if (event.key === 'Enter') {
                        TodoStore.doneEdit(props.todo, event);
                      } else if (event.key === 'Escape') {
                        TodoStore.cancelEdit(props.todo, event);
                      }
                    }}
                  />
                }
                <div style={{ flexDirection: 'row', paddingRight: '5px' }}>
                  <DeletWrapperBtn {...props} ip={props.todo.id} />
                  <span onClick={(event) => { TodoStore.editTodo(props.todo, event) }} className="fa fa-edit" style={{ fontSize: '36px', color: '#369ef4' }}></span>

                </div>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>
              <h3>Tags</h3>
              {props.todo.tags.map(tags =>
                <div className='tags' key={tags.id}><text>{tags}</text></div>
              )}
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  );
}));


export default TodoItem;