function filterItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.setData('text/html', event.target.outerHTML);
}

function drop1(event, selected_item) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/html');
    // event.target.insertAdjacentHTML('atend', data);
    const selected_item_container = document.getElementById(selected_item);
    selected_item_container.innerHTML = data;
}