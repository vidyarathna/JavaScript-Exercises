// Function to deep clone an object, including nested objects and arrays

/**
 * Perform a deep clone of an object.
 * @param {Object} obj - The object to be deep cloned.
 * @returns {Object} - The deep cloned object.
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return non-object values as is
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)); // Recursively clone arrays
    }

    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]); // Recursively clone object properties
        }
    }

    return clonedObj;
}

// Function to get user input and create an object dynamically
function createDynamicObject() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"), 10);
    const city = prompt("Enter city:");
    const zipcode = parseInt(prompt("Enter zipcode:"), 10);

    const hobbies = [];
    let addMoreHobbies;
    do {
        const hobby = prompt("Enter a hobby:");
        hobbies.push(hobby);
        addMoreHobbies = prompt("Add more hobbies? (yes/no)").toLowerCase() === 'yes';
    } while (addMoreHobbies);

    const family = {
        spouse: {
            name: prompt("Enter spouse's name:"),
            age: parseInt(prompt("Enter spouse's age:"), 10)
        },
        children: []
    };

    let addMoreChildren;
    do {
        const childName = prompt("Enter child's name:");
        const childAge = parseInt(prompt("Enter child's age:"), 10);
        family.children.push({ name: childName, age: childAge });
        addMoreChildren = prompt("Add more children? (yes/no)").toLowerCase() === 'yes';
    } while (addMoreChildren);

    return {
        name,
        age,
        address: {
            city,
            zipcode
        },
        hobbies,
        family
    };
}

// Get user input to create an object
const originalObject = createDynamicObject();

// Clone the dynamically created object
const clonedObject = deepClone(originalObject);

// Display the original and cloned objects
console.log('Original Object:', originalObject);
console.log('Cloned Object:', clonedObject);

// Allow the user to modify the cloned object
const modifyCloned = prompt("Do you want to modify the cloned object? (yes/no)").toLowerCase() === 'yes';
if (modifyCloned) {
    clonedObject.address.city = prompt("Enter new city for cloned object:");
    clonedObject.hobbies.push(prompt("Enter a new hobby for cloned object:"));
    if (clonedObject.family.children.length > 0) {
        clonedObject.family.children[0].name = prompt("Enter new name for the first child in cloned object:");
    }
}

// Show the results after modification
console.log('Modified Cloned Object:', clonedObject);
console.log('Original Object remains unchanged:', originalObject);
