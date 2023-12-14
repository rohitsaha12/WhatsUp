// script.js

function handleClick(event) {
    // handle click on contact-items
    if (event.target.classList.contains('contact-item')) {
      const contact_items = document.getElementsByClassName("contact-item");
      console.log(contact_items)
      Array.from(contact_items).forEach(contact_item => {
        if(contact_item == event.target){
            console.log("target_mached")
            contact_item.style.backgroundColor = 'cadetblue';
            contact_item.style.color = 'whitesmoke';
        }
        else{
            contact_item.style.backgroundColor = 'whitesmoke';
            contact_item.style.color = 'black';
        }
      });
      
      
      console.log(event.target)



      // change loaded-contact-top-bar
      const name_to_change = event.target.querySelector(".contact-name").innerText
      const load_contact_name = document.querySelector('.chat-window .top-bar .load-contact-name');
      
      const name = document.createElement('h3')
      name.textContent = name_to_change
      load_contact_name.innerHTML = name.outerHTML

    }
  }
  
//   // Assume you have an API call to get data and create elements
//   function handleApiCall() {
//     // Simulated API response
//     const apiResponse = ['Item 1', 'Item 2', 'Item 3'];
  
//     // Get the container where you want to append items
//     const container = document.querySelector('.outer-div');
  
//     // Create elements dynamically
//     apiResponse.forEach((itemText) => {
//       const newItem = document.createElement('div');
//       newItem.className = 'clickable-div';
//       newItem.textContent = itemText;
//       container.appendChild(newItem);
//     });
//   }
  
// Attach a single event listener to the container for delegation
alert('Hello, world! Welcome to the chat page ');
document.addEventListener('click', handleClick);

//   // Call the API and create elements
//   handleApiCall();