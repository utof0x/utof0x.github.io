export const createDropdownList = (itemsList, addChecboxes) => {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  for (let item of itemsList) {
    const dropdownItem = document.createElement('div');
    dropdownItem.className = 'dropdown__item';

    const itemText = document.createElement('span');
    itemText.className = 'dropdown__text';
    itemText.innerHTML = item;

    dropdownItem.append(itemText);

    if (addChecboxes) {
      const checkbox = document.createElement('input');
      checkbox.className = 'dropdown__select';
      checkbox.type = 'checkbox';

      dropdownItem.append(checkbox);
    }

    dropdown.append(dropdownItem);
  }

  return dropdown;
};
