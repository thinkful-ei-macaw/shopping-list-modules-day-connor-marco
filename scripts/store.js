import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return items.find(element => element.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    items.push(item.create(name));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  // find item by id
  
  // toggle checked attribute
}

export default {
  items,
  hideCheckedItems
};

