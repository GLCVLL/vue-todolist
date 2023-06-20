console.log('js ok');

console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'ToDoList',
    data() {
        return {
            todos: [
                { id: 1, text: 'Comprare shampoo', done: false },
                { id: 2, text: 'Pulire giardino', done: false },
                { id: 3, text: 'Fare passeggiata con il cane', done: false },
                { id: 4, text: 'Preparare torta compleanno', done: true },
                { id: 5, text: 'Sistemare cucina', done: false }
            ],

            newTodoText: '',
        };
    },
    methods: {
        deleteTodo(id) {
            const index = this.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
              this.todos.splice(index, 1);
            }
        },

        addTodo() {
            if (this.newTodoText.trim !== '') {
                this.todos.push({ text: this.newTodoText, done: false});
                this.newTodoText = '';
            }
        },

        toggleDone(todo) {
            todo.done = !todo.done;
        }
    }
});

app.mount('#root');