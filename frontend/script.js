const apiUrl = 'http://localhost:8000';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to fetch todos and render them
async function fetchTodos() {
    try {
        const response = await fetch(`${apiUrl}/todos/`);
        const todos = await response.json();
        renderTodos(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// Function to render todos in the list
function renderTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.dataset.id = todo.id;
        if (todo.completed) {
            li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(todo.id, !todo.completed));

        const span = document.createElement('span');
        span.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Event listener for form submission
todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        await createTodo(text);
        todoInput.value = '';
        fetchTodos();
    }
});

// Function to create a new todo
async function createTodo(text) {
    try {
        await fetch(`${apiUrl}/todos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text, completed: false }),
        });
    } catch (error) {
        console.error('Error creating todo:', error);
    }
}

// Function to toggle a todo's completed status
async function toggleTodo(id, completed) {
    try {
        const response = await fetch(`${apiUrl}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: document.querySelector(`li[data-id='${id}'] span`).textContent, completed: completed }),
        });
        if (response.ok) {
            fetchTodos();
        }
    } catch (error) {
        console.error('Error updating todo:', error);
    }
}

// Function to delete a todo
async function deleteTodo(id) {
    try {
        const response = await fetch(`${apiUrl}/todos/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            fetchTodos();
        }
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

// Initial fetch of todos when the page loads
fetchTodos();
