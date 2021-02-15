/**
 * @returns {object} That contains all events.
 */

export const getEvents = () => {
  return JSON.parse(localStorage.getItem('events'));
};
