document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    const date = new Date().toLocaleString();

    const contact = { name, phone, description, date };

    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push(contact);

    localStorage.setItem('contatos', JSON.stringify(contatos));

    document.getElementById('contactForm').reset();
});