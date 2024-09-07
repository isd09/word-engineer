// Function to dynamically create items
async function createItems() {
    const container = document.getElementById('item-container');

    try {
        // Extract the data from the JSON file on GitHub

        const prefix_response = await fetch('https://raw.githubusercontent.com/isd09/word-engineer/main/words/prefixes.json');
        
        if (!prefix_response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const prefix_response_data = await prefix_response.json();

        const root_response = await fetch('https://raw.githubusercontent.com/isd09/word-engineer/main/words/root-words.json');
        
        if (!root_response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const root_response_data = await root_response.json();

        const suffix_response = await fetch('https://raw.githubusercontent.com/isd09/word-engineer/main/words/suffixes.json');
        
        if (!suffix_response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const suffix_response_data = await suffix_response.json();
        const container = document.getElementById('item-container');
        
        console.log('Container:', container);
        if (!container) {
            throw new Error('Container element not found');
        }

        prefix_response_data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.word;
            div.className = 'item';
            div.setAttribute('type', item.type);
            div.setAttribute('definition', item.definition);
            
            // Set draggable attribute
            div.draggable = true;
            
            // Add drag event listeners
            div.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text/plain', event.target.id);
            });

            container.appendChild(div);
        });

        root_response_data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.word;
            div.className = 'item';
            div.setAttribute('type', item.type);
            div.setAttribute('definition', item.definition);
            
            // Set draggable attribute
            div.draggable = true;
            
            // Add drag event listeners
            div.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text/plain', event.target.id);
            });

            container.appendChild(div);
        });

        suffix_response_data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.word;
            div.className = 'item';
            div.setAttribute('type', item.type);
            div.setAttribute('definition', item.definition);
            
            // Set draggable attribute
            div.draggable = true;
            
            // Add drag event listeners
            div.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text/plain', event.target.id);
            });

            container.appendChild(div);
        });

    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
}

createItems();
