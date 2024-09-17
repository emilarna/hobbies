async function hashInput(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function handleInput() {
    const inputValue = document.getElementById('textInput').value;
    const hashedValue = await hashInput(inputValue);
    
    document.getElementById('output').textContent = `SHA-512: ${hashedValue}`;




}

// Usage
hashInput("Hello World").then(hash => {
    console.log(hash);  // Outputs the hash in hexadecimal format
});




const people = [];

        document.getElementById('personForm').addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent the form from refreshing the page

            // Get form values
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const sex = document.getElementById('sex').value;

            // Create a person object (map) and append to the array
            const person = { name, age, sex };
            people.push(person);

            // Display the updated list of people
            displayPeople();

            // Clear form fields after submission
            document.getElementById('personForm').reset();
        });

        function displayPeople() {
            const peopleList = document.getElementById('peopleList');
            peopleList.innerHTML = '';  // Clear current list

            people.forEach(function (person, index) {
                const listItem = document.createElement('li');
                listItem.textContent = `${person.name}, Age: ${person.age}, Sex: ${person.sex}`;
                peopleList.appendChild(listItem);
            });
        }