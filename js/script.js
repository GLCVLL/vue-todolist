console.log('js ok');

console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'ToDoList',
    data() {
        return {
            todos: [
                { text: 'Comprare shampoo', done: false },
                { text: 'Pulire giardino', done: false },
                { text: 'Fare passeggiata con il cane', done: false },
                { text: 'Preparare torta compleanno', done: true },
                { text: 'Sistemare cucina', done: false }
            ]
        }
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});

app.mount('#root');