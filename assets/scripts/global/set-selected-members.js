export const setSelectedMembers = (defaultValue) => {
  const membersText = document.querySelector('.selection__text');
  const membersList = [];
  const checkedMembers = document.querySelectorAll('.dropdown__select:checked');

  checkedMembers.forEach((item) =>
    membersList.push(item.parentNode.querySelector('.dropdown__text').innerHTML)
  );

  membersText.innerHTML =
    membersList.length === 0 ? defaultValue : membersList.join(', ');
};
