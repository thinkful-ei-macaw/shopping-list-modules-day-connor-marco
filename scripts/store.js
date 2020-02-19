import item from './item.js';

const items = [];
const hideCheckedItems = false;

// returns object
function findById(id) {
  // by referring to items as this.items, we are referring to the exported object
  return this.items.find(element => element.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  // find item by id
  let targetedObject = this.findById(id);
  // toggle checked attribute
  targetedObject.checked = !targetedObject.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let targetedObject = this.findById(id);
    targetedObject.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`)
  }
}

function findAndDelete(id) {
  // let targetedObject = findById(id);
  this.items = this.items.filter(element => this.findById(id) !== element);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};

