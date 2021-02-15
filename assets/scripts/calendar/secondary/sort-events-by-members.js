export const sortEventsByMembers = (members) => {
  const events = document.querySelectorAll('.event');

  events.forEach((event) => {
    if (members.length === 1) {
      if (
        !members.some((name) => event.dataset.members.split('-').includes(name))
      ) {
        event.classList.add('hidden');
      } else {
        event.classList.remove('hidden');
      }
    } else {
      if (
        !members.every((name) =>
          event.dataset.members.split('-').includes(name)
        )
      ) {
        event.classList.add('hidden');
      } else {
        event.classList.remove('hidden');
      }
    }
  });
};
