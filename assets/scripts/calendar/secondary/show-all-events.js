export const showAllEvents = () => {
  document
    .querySelectorAll('.event')
    .forEach((event) => event.classList.remove('hidden'));
};
