document.addEventListener('DOMContentLoaded', function() {
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    contatos.forEach(contact => {
        addContactToTable(contact);
    });
});

// Função para adicionar contato à tabela (importada do main.js)
function addContactToTable(contact) {
    const tableBody = document.querySelector('#contactTable tbody');
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

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        deleteContact(contact, row);
    };
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
}