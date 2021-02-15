import { state } from '../global/state.js';
import { createDropdownList } from '../global/create-dropdown-list.js';
import { setSelectedMembers } from '../global/set-selected-members.js';
import { addQuestionWindow } from './secondary/add-question-window.js';
import { insertEvents } from './secondary/insert-events.js';
import { getEventProps } from './secondary/get-event-props.js';
import { showAllEvents } from './secondary/show-all-events.js';
import { sortEventsByMembers } from './secondary/sort-events-by-members.js';
import { getSelectedMembers } from './secondary/get-selected-members.js';

document.addEventListener('DOMContentLoaded', () => {
  insertEvents();

  document
    .querySelector('.dropdown-holder')
    .append(createDropdownList(state.members, true));

  document.querySelector('.selection__button').addEventListener('click', () => {
    document.querySelector('.dropdown-holder').classList.toggle('open');
    document.querySelector('.selection__arrow').classList.toggle('open');
  });

  document.querySelectorAll('.dropdown__select').forEach((input) => {
    input.addEventListener('change', () => {
      setSelectedMembers('All members');

      const selectedMembers = getSelectedMembers();

      if (selectedMembers.some((name) => name === 'All members')) {
        showAllEvents();
      } else {
        sortEventsByMembers(selectedMembers);
      }
    });
  });

  document.querySelectorAll('.event__icon').forEach((icon) =>
    icon.addEventListener('click', (event) => {
      const eventProps = getEventProps(event.target.parentNode);

      addQuestionWindow(eventProps);
    })
  );
});
