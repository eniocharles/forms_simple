document.addEventListener('DOMContentLoaded', function() {
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    const tableBody = document.querySelector('#contactTable tbody');

    contatos.forEach(contact => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = contact.name;
        row.appendChild(nameCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = contact.phone;
        row.appendChild(phoneCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = contact.description.length > 30 ? 
            `${contact.description.substring(0, 30)}...` : contact.description;
        row.appendChild(descriptionCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = contact.date;
        row.appendChild(dateCell);

        tableBody.appendChild(row);
    });
});