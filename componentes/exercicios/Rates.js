export default {
  name: 'Rates',
  template: `
    <div>
      <p>Valor Dolar/Hoje: {{rates}}</p>
    </div>
  `,
  data() {
    return {
      rates: {}
    }
  },
  methods: {
      async getRates(){
      const ratesData = await fetch('https://api.exchangeratesapi.io/latest?base=USD')
      const ratesJson = await ratesData.json()
      this.rates = ratesJson.rates.BRL.toFixed(2)
    }
  },
  created(){
    this.getRates()
  }
}