
// Vue TodoList 
let vueControls = {
  data() {
    return {
      title: "hello",
      text: "hekki",
      todoList: [],
      className: ""
    }
  },
  methods: {
    addTask() {
      if (this.title == "" || this.text == "") {
        this.className = 'active'
        setTimeout(() => {
          this.className = ""
        }, 1000);
      } else {
        this.todoList.push({
          title: this.title,
          text: this.text,
          time: new Date().toLocaleString(),
          completed: false
        })
        this.title = "",
          this.text = ""
      }

    },
    doOrUndo(i) {
      this.todoList[i].completed = !this.todoList[i].completed
      if (this.todoList[i].completed == true) {
        this.todoList[i].completed = "completed"
      }
      if (this.todoList[i].completed == false) {
        this.todoList[i].completed = ""
      }
    }
  }
}

const app = Vue.createApp(vueControls)

app.mount('#todo-list')


