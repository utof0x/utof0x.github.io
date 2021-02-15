import { state } from '../global/state.js';
import { getEvents } from '../global/get-events.js';
import { setEvents } from '../global/set-events.js';
import { createDropdownList } from '../global/create-dropdown-list.js';
import { setSelectedMembers } from '../global/set-selected-members.js';
import { parseUserData } from './secondary/parse-user-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // select members dropdown holder and init members dropdown
  document
    .querySelector('.members-holder')
    .append(createDropdownList(state.members, true));

  // select day dropdown holder and init day dropdown
  document
    .querySelector('.day-holder')
    .append(createDropdownList(state.days, false));

  // select time dropdown holder and init time dropdown
  document
    .querySelector('.time-holder')
    .append(createDropdownList(state.times, false));

  // select all dropdown buttons
  document.querySelectorAll('.selection__button').forEach((button) => {
    // add clisk listener to every button
    button.addEventListener('click', (event) => {
      // add or remove 'open' class from arrow to set it posotoin from up to down
      event.currentTarget
        .querySelector('.selection__arrow')
        .classList.toggle('open');

      // add or remove 'open' class from dropdown to show or hide it
      event.currentTarget.parentNode
        .querySelector('.dropdown-holder')
        .classList.toggle('open');
    });
  });

  // select all inputs in members dropdown
  document.querySelectorAll('.dropdown__select').forEach((input) => {
    // add 'change' event on every input
    input.addEventListener('change', () => {
      // after add/remove member set selected members text
      setSelectedMembers('Select participants');
    });
  });

  // select all items in members, day and time dropdown
  document.querySelectorAll('.dropdown__item').forEach((item) => {
    // add 'click' event on every item
    item.addEventListener('click', (event) => {
      // check item is not a part of  nembers dropdown
      if (!event.currentTarget.querySelector('.dropdown__select')) {
        // select closest dropdown
        const selection = event.currentTarget.closest('.item-selection');

        // set current dropdown text to clicked item text
        selection.querySelector('.selection__text').innerHTML =
          event.currentTarget.innerText;

        // add or remove 'open' class from arrow to set it posotoin from up to down
        selection.querySelector('.selection__arrow').classList.toggle('open');

        // add or remove 'open' class from dropdown to show or hide it
        selection.querySelector('.dropdown-holder').classList.toggle('open');
      }
    });
  });

  // add event listener on error-icon click to close error tab
  document.querySelector('.error__close').addEventListener('click', () => {
    document.querySelector('.error').classList.add('hidden');
  });

  // select create event button and add click listener to add new event or show error
  document
    .querySelector('.create-button')
    .addEventListener('click', (event) => {
      // get user data from input and selections
      const userData = parseUserData();

      // get all previos events
      const events = getEvents();

      // if events exist
      if (events) {
        // if new event get date and time like any of old events
        if (
          events.some(
            (event) => event.day == userData.day && event.time == userData.time
          )
        ) {
          // don`t go to events page
          event.preventDefault();
          // show error
          document.querySelector('.error').classList.remove('hidden');
        } else {
          // if new event get date and time another from any of old events save event
          setEvents([{ ...userData }, ...events]);
        }
      }
      // if event not exist
      else {
        // add new event without check
        setEvents([{ ...userData }]);
      }
    });
});
