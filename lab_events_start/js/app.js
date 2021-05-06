document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);



})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultFormInput = document.querySelector('#reading-list')
  const newListItem = document.createElement("li");
  const newUnorderedList = document.createElement("ul");
  const newULListItem1 = document.createElement("li");
  const newULListItem2 = document.createElement("li");
  const newULListItem3 = document.createElement("li");
  const list = document.querySelector("#reading-list");

  // newListItem.textContent = `${event.target.title.value}${event.target.author.value}${event.target.category.value}`;
  list.appendChild(newListItem)
  newListItem.appendChild(newUnorderedList)
  newUnorderedList.appendChild(newULListItem1).textContent = `${event.target.title.value}`
  newUnorderedList.appendChild(newULListItem2).textContent = `${event.target.author.value}`
  newUnorderedList.appendChild(newULListItem3).textContent = `${event.target.category.value}`

  const clearForm = document.querySelector("#new-item-form").reset();
}
