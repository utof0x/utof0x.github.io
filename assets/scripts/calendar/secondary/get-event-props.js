export const getEventProps = (eventTab) => {
  const props = {};

  props.name = eventTab.innerText;
  props.day = eventTab.closest('.table__cell').dataset.day;
  props.time = eventTab.closest('.row').dataset.time;

  return props;
};
