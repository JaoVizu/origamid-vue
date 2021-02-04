export default {
  state: {
    livros: [
      {
        nome: "O Senhor dos Anéis",
        lido: true
      },
      {
        nome: "Harry Potter",
        lido: true
      },
      {
        nome: "As Crônicas de Gelo e Fogo",
        lido: false
      }
    ]
  },
  getters: {
    livrosLidos(state) {
      return state.livros.filter(livro => livro.lido)
    }
  }
}