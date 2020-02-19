import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return store.items.find(element => element.id === id);
}

export default {
  items,
  hideCheckedItems
};

