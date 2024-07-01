document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    const date = new Date().toLocaleString();

    // Criar objeto de contato
    const contact = { name, phone, description, date };

    // Obter contatos do localStorage ou criar array vazio
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push(contact);

    // Salvar contatos atualizados no localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Resetar formulário
    document.getElementById('contactForm').reset();

    // Adicionar novo contato à tabela
    addContactToTable(contact);
});

// Função para adicionar contato à tabela
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

// Função para excluir contato
function deleteContact(contact, row) {
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos = contatos.filter(c => c.name !== contact.name || c.phone !== contact.phone || c.description !== contact.description || c.date !== contact.date);
    localStorage.setItem('contatos', JSON.stringify(contatos));
    row.remove();
}