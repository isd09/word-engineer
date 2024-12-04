fetch('words/prefixes.json')
    .then(response => response.json())
    .then(jsonData => {
        // Get the dropdown element
        const dropdown = document.getElementById('prefix-dropdown');

        // Populate the dropdown with options from the fetched JSON
        jsonData.forEach(item => {
            const option = document.createElement('option');
            option.value = item.definition; // Use the `word` as the value
            option.textContent = item.word; // Show the `word` and `definition`
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });
fetch('words/root-words.json')
    .then(response => response.json())
    .then(jsonData => {
        // Get the dropdown element
        const dropdown = document.getElementById('root-dropdown');

        // Populate the dropdown with options from the fetched JSON
        jsonData.forEach(item => {
            const option = document.createElement('option');
            option.value = item.definition; // Use the `word` as the value
            option.textContent = item.word; // Show the `word` and `definition`
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });
fetch('words/suffixes.json')
    .then(response => response.json())
    .then(jsonData => {
        // Get the dropdown element
        const dropdown = document.getElementById('suffix-dropdown');

        // Populate the dropdown with options from the fetched JSON
        jsonData.forEach(item => {
            const option = document.createElement('option');
            option.value = item.definition; // Use the `word` as the value
            option.textContent = item.word; // Show the `word` and `definition`
            option.text = item.word;
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

const prefix = document.getElementById('prefix-dropdown');
const root = document.getElementById("root-dropdown");
const suffix = document.getElementById("suffix-dropdown");

const fullform = document.getElementById("fullform");
const definition = document.getElementById("definition");

prefix.addEventListener('change', function() {
    // Display the selected value in the paragraph
    definition.textContent = prefix.value + " " + root.value + " " + suffix.value;
    fullform.textContent = prefix.options[prefix.selectedIndex].text + root.options[root.selectedIndex].text + suffix.options[suffix.selectedIndex].text;
});

root.addEventListener('change', function() {
    // Display the selected value in the paragraph
    definition.textContent = prefix.value + " " + root.value + " " + suffix.value;
    fullform.textContent = prefix.options[prefix.selectedIndex].text + root.options[root.selectedIndex].text + suffix.options[suffix.selectedIndex].text;
});

suffix.addEventListener('change', function() {
    // Display the selected value in the paragraph
    definition.textContent = prefix.value + " " + root.value + " " + suffix.value;
    fullform.textContent = prefix.options[prefix.selectedIndex].text + root.options[root.selectedIndex].text + suffix.options[suffix.selectedIndex].text;

});