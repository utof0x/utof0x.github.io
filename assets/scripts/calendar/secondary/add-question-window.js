import { getEvents } from '../../global/get-events.js';
import { setEvents } from '../../global/set-events.js';
import { insertEvents } from './insert-events.js';

export const addQuestionWindow = (props) => {
  const questionWindow = document.createElement('div');
  questionWindow.className = 'question-window';

  const question = document.createElement('div');
  question.className = 'question-window__question';
  question.innerHTML = `Are you sure you want to delete "${props.name}" event?`;

  const cancelButton = document.createElement('a');
  cancelButton.className = 'cancel-button option-button';
  cancelButton.innerHTML = 'No';

  const confirmButton = document.createElement('a');
  confirmButton.className = 'confirm-button option-button';
  confirmButton.innerHTML = 'Yes';

  const buttonsHolder = document.createElement('div');
  buttonsHolder.className = 'buttons-holder';

  buttonsHolder.append(cancelButton);
  buttonsHolder.append(confirmButton);

  questionWindow.append(question);
  questionWindow.append(buttonsHolder);

  document.querySelector('.content').append(questionWindow);

  cancelButton.addEventListener('click', () => {
    removequestionWindow();
  });

  confirmButton.addEventListener('click', () => {
    deleteEvent(props);

    removeOldEvents();

    insertEvents();

    removequestionWindow();
  });
};

const deleteEvent = (eventProps) => {
  const events = getEvents();

  setEvents(
    events.filter(
      (event) =>
        event.name !== eventProps.name ||
        event.day !== eventProps.day ||
        event.time !== eventProps.time
    )
  );
};

const removeOldEvents = () => {
  document.querySelectorAll('.event').forEach((event) => {
    event.remove();
  });
};

const removequestionWindow = () => {
  document.querySelector('.question-window').remove();
};
