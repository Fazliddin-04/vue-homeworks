// Regions 
let regionControls = {
  data() {
    return {
      tashkent: false,
      samarkand: false,
      dubai: false,
    }
  },
  methods: {
    onClick(arg) {
      if (arg === 'tashkent') {
        this.tashkent = true
      }
      if (arg === 'samarkand') {
        this.tashkent = false
        this.samarkand = true

      } if (arg === 'dubai') {
        this.dubai = true
        this.tashkent = false
        this.samarkand = false
      }
    }
  }
}

const app2 = Vue.createApp(regionControls)

app2.mount('#regions')