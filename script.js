document.querySelectorAll('header li a').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('header li a').forEach(nav => nav.classList.remove('active'));
        e.target.classList.add('active');
    });
});

function createModal(title, author, year, link) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${title}</h2>
            <p>${author}</p>
            <a href="${link}" target="_blank" class="button">Learn More</a>
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.remove();
    });
}

document.querySelectorAll('.book .button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const book = e.target.closest('.book');
        const title = book.querySelector('h2').textContent;
        const authors = Array.from(book.querySelectorAll('p')).map(p => p.textContent).join(', ');
        const link = button.getAttribute('href');

        createModal(title, authors, "2010", link);
    });
});


document.querySelectorAll('header li a').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('header li a').forEach(nav => nav.classList.remove('active'));
        e.target.classList.add('active');
    });
});

function createModal(title, authors, year, link) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${title}</h2>
            <p>${authors}</p>
            <a href="${link}" target="_blank" class="button">Learn More</a>
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.remove();
    });
}

document.querySelectorAll('.description .button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const description = e.target.closest('.description');
        const title = description.querySelector('h2').textContent;
        const authors = Array.from(description.querySelectorAll('p')).map(p => p.textContent).join(', ');
        const yearMatch = authors.match(/\u00A9(\d{4})/);
        const year = yearMatch ? yearMatch[1] : "Year Unknown";
        const link = button.getAttribute('href');

        createModal(title, authors, year, link);
    });
});

document.querySelectorAll('header li a').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('header li a').forEach(nav => nav.classList.remove('active'));
        e.target.classList.add('active');
    });
});

document.querySelector('.login-box form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('.input-field[type="text"]').value;
    const password = document.querySelector('.input-field[type="password"]').value;

    if (!username || !password) {
        alert('Please fill in both Username and Password fields.');
        return;
    }

    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'slog.html';
    } else {
        alert('Invalid Username or Password. Please try again.');
    }
});
