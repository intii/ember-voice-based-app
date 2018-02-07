import voiceBasedComponent from './speech-based-component';

export default voiceBasedComponent.extend({
  
  todos: ['comprar coca', 'vender merca'],
  completed: [],

  init() {
    this._super(...arguments);
    this.intentActionMap = {};
    this.intentActionMap['add-reminder'] = (todo, data) => {
      this.set('todos', this.todos.concat(data.parameters.todo));
    };
    this.intentActionMap['complete-todo'] = (intent, data) => {
      const ordinal = data.parameters.ordinal;
      if (ordinal) {
        const todoNumber = parseInt(ordinal, 10);
        if (todoNumber <= this.todos.length) {
          const order = todoNumber - 1;
          if (!this.completed.includes(order)) {
            this.set('completed', this.completed.concat(order));
          }
        }
      }
    };
  }

});
