//your code here!
// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the list and initialize the count of list items
  const infiList = document.getElementById("infi-list");
  let listItemCount = 10; // Number of initial list items
  const loadMoreCount = 2; // Number of items to load on each scroll

  // Function to create and append list items
  function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  // Function to load more list items
  function loadMoreItems() {
    for (let i = 0; i < loadMoreCount; i++) {
      const listItem = createListItem("List Item " + (listItemCount + i + 1));
      infiList.appendChild(listItem);
    }
    listItemCount += loadMoreCount;
  }

  // Initialize with the initial list items
  for (let i = 1; i <= listItemCount; i++) {
    const listItem = createListItem("List Item " + i);
    infiList.appendChild(listItem);
  }

  // Add a scroll event listener to load more items when reaching the end
  infiList.addEventListener("scroll", function () {
    if (
      infiList.scrollTop + infiList.clientHeight >=
      infiList.scrollHeight - 10 // You can adjust this threshold as needed
    ) {
      loadMoreItems();
    }
  });
});

