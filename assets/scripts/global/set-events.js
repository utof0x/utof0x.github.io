/**
 * @param {array} events Array of objects that contains all event to setting.
 *
 * Sets old events in localStorage to new.
 */

export const setEvents = (events) => {
  localStorage.setItem('events', JSON.stringify(events));
};
