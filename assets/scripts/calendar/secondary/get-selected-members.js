export const getSelectedMembers = () => {
  return document.querySelector('.selection__text').innerHTML.split(', ');
};
