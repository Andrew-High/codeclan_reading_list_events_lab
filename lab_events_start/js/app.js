document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormSubmit);



})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultFormInput = document.querySelector('#reading-list')
  const newListItem = document.createElement("li");
  newListItem.textContent = `${event.target.title.value}${event.target.author.value}${event.target.category.value}`;
  const list = document.querySelector("#reading-list")
  list.appendChild(newListItem)
  const clearForm = document.querySelector("#new-item-form").reset();
}
