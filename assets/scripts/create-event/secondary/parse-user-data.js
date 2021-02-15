export const parseUserData = () => {
  const data = {};

  data.name = document.querySelector('.item__input').value;

  data.members = document
    .querySelector('.members-select')
    .querySelector('.selection__text')
    .innerHTML.split(', ');

  data.day = document
    .querySelector('.day-select')
    .querySelector('.selection__text').innerHTML;

  data.time = document
    .querySelector('.time-select')
    .querySelector('.selection__text').innerHTML;

  return data;
};
