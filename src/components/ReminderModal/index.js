import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  createReminder,
  editReminder,
  deleteReminder,
} from '../../store/actions';

import { CloseIcon } from '../../assets/icons/CloseIcon';

const reminderReducer = (state, evt) => {
  return {
    ...state,
    [evt.target.name]: evt.target.value,
  };
};

const ReminderModal = ({
  reminders,
  createReminder,
  editReminder,
  deleteReminder,
}) => {
  const history = useHistory();
  const { id } = useParams();

  // ID is set but doesn't exist
  if (id && !reminders[id]) {
    history.push('/');
  }

  const [reminderData, setReminderData] = useReducer(reminderReducer, {
    dateTime: reminders[id] ? reminders[id].dateTime : '',
    color: reminders[id] ? reminders[id].color : '#000000',
    description: reminders[id] ? reminders[id].description : '',
    city: reminders[id] ? reminders[id].city : '',
  });

  const onClose = () => {
    history.push('/');
  };

  const submitReminder = (evt) => {
    evt.preventDefault();
    id ? editReminder(id, [reminderData]) : createReminder([reminderData]);

    onClose();
  };

  const onDelete = () => {
    deleteReminder(id);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-bg">
      <div className="modal-window">
        <div className="modal-title">
          <span>{id ? 'Edit event' : 'Create event'}</span>
          <CloseIcon onClick={onClose} className="modal-close" />
        </div>
        <form className="reminder-form" onSubmit={submitReminder}>
          <label>
            <span>Date and time:</span>
            <input
              type="datetime-local"
              name="dateTime"
              value={reminderData.dateTime}
              onChange={setReminderData}
            />
          </label>

          <label>
            <span>Color:</span>
            <input
              type="color"
              name="color"
              value={reminderData.color}
              onChange={setReminderData}
            />
          </label>

          <label>
            <span>Description:</span>
            <input
              name="description"
              maxLength="30"
              value={reminderData.description}
              onChange={setReminderData}
            />
          </label>

          <label>
            <span>City:</span>
            <input
              name="city"
              value={reminderData.city}
              onChange={setReminderData}
            />
          </label>

          <div className="button-container">
            <button type="submit" className="button-blue">
              {id ? 'Save' : 'Create'}
            </button>
            {id ? (
              <button type="button" onClick={onDelete} className="button-red">
                {'Delete'}
              </button>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  createReminder,
  editReminder,
  deleteReminder,
})(ReminderModal);
