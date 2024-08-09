// Array to hold the contacts
const contactList = [];

// Function to add a contact to the list
function addContact(name, phone) {
  if (name.trim() === '' || phone.trim() === '') {
    alert('Name and phone number cannot be empty.');
  } else {
    contactList.push({ name, phone });
    alert(`Contact added: ${name} (${phone})`);
  }
}

// Function to display all contacts
function displayContacts() {
  if (contactList.length === 0) {
    alert('Your contact list is empty.');
  } else {
    alert('Contact List:\n' + contactList.map((contact, index) => `${index + 1}. ${contact.name} - ${contact.phone}`).join('\n'));
  }
}

// Function to search for a contact by name
function searchContact(name) {
  const foundContacts = contactList.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
  
  if (foundContacts.length === 0) {
    alert('No contacts found with that name.');
  } else {
    alert('Search Results:\n' + foundContacts.map((contact, index) => `${index + 1}. ${contact.name} - ${contact.phone}`).join('\n'));
  }
}

// Function to handle user input
function handleUserInput() {
  let userAction;
  
  do {
    userAction = prompt('Choose an action: \n1. Add Contact \n2. View Contacts \n3. Search Contact \n4. Exit');
    
    switch (userAction) {
      case '1':
        const name = prompt('Enter the contact name:');
        const phone = prompt('Enter the contact phone number:');
        addContact(name, phone);
        break;
      case '2':
        displayContacts();
        break;
      case '3':
        const searchName = prompt('Enter the name to search for:');
        searchContact(searchName);
        break;
      case '4':
        alert('Exiting the application.');
        break;
      default:
        alert('Invalid choice. Please enter a number between 1 and 4.');
    }
  } while (userAction !== '4');
}

// Call the function to handle user input
handleUserInput();
