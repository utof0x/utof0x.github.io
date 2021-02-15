import { getEvents } from '../../global/get-events.js';

export const insertEvents = () => {
  const events = getEvents();

  if (events) {
    for (let event of events) {
      const eventTab = document.createElement('div');
      eventTab.className = 'event';
      eventTab.dataset.members = event.members.join('-');

      const eventName = document.createElement('span');
      eventName.className = 'event__name';
      eventName.innerHTML = event.name;

      const closeIcon = document.createElement('img');
      closeIcon.className = 'event__icon';
      closeIcon.src = '../../../assets/icons/close-icon.png';

      eventTab.append(eventName);
      eventTab.append(closeIcon);

      document
        .querySelector(`.row[data-time="${event.time}"]`)
        .querySelector(`.table__cell[data-day="${event.day}"]`)
        .append(eventTab);
    }
  }
};
