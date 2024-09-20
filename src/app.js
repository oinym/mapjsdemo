console.log("Starting...")

/*
function updateNestedAttribute(obj, path, value) {
    const keys = path.split('.'); // Split the path into keys
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        // Create a new object if the key does not exist
        if (!current[key]) {
            current[key] = {};
        }

        current = current[key]; // Move deeper into the object
    }

    // Update the final attribute
    current[keys[keys.length - 1]] = value;
}
*/

function updateNestedAttribute(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        // Check if the current key points to an array
        if (!isNaN(key)) {
            current = current[key]; // Move to the array element
        } else {
            // Create a new object/array if the key does not exist
            if (!current[key]) {
                current[key] = isNaN(keys[i + 1]) ? {} : [];
            }
            current = current[key];
        }
    }

    // Update the final attribute
    current[keys[keys.length - 1]] = value;
}

// Example usage:
const person = {
    firstName: "John",
    addresses: [
        { id: 1, city: "New York", country: "New York" },
        { id: 2, city: "Los Angeles", country: "California" }
    ]
};
updateNestedAttribute(person, 'personalData.contact.email', 'JohnD@gmail.com');
console.log(person);
// Update the street name for the New York address (index 0)
updateNestedAttribute(person, 'addresses.0.street', '5th Avenue');
console.log(person);





