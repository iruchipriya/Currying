function handleClick(action) {
  return function (event) {
    alert(`${action} button clicked`);
  };
}

const handleSave = handleClick('save');
const handleDelete = handleClick('delete');

document.getElementById('saveButton').addEventListener('click', handleSave);

document.getElementById('deleteButton').addEventListener('click', handleDelete);

function add(x, y, z) {
  return x + y + z;
}

console.log(add(2, 3, 4));

function curriedAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
console.log(curriedAdd(2)(1)(4));

function curriedAdd2(x) {
  return function (y) {
    if (y === undefined) {
      return x;
    } else {
      return curriedAdd2(x + y);
    }
  };
}

console.log(curriedAdd2(2)(12)(4)());
