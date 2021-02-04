import Rates from './Rates.js'

export default {
  name: 'Valor',
  template: `
    <div>
      <rates></rates>
      <p>{{valor.apple}}</p>

    </div>
    `,
  components: { Rates },
  data(){
    return {
      valor: {}
    }
  },
  methods: {
    async getValor(){
      const valorData = await fetch('./quotes.json')
      const valorJson = await valorData.json()
      this.valor = valorJson.quotes
    }
  },
  created(){
    this.getValor()
  }
}