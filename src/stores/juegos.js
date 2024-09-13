import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref({})

  async function fetchJuegos() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)
      juegos.value = data
    } catch (error) {
      console.log(error)
    }
  }

  function aumentarStock(codigo) {
    juegos.value.map((juego) => {
      if (juego.codigo === codigo) {
        juego.stock++
      }
    })
  }
  function disminuirStock(codigo) {
    juegos.value.map((juego) => {
      if (juego.codigo === codigo) {
        juego.stock--
      }
    })
  }

  return {
    juegos,
    fetchJuegos,
    aumentarStock,
    disminuirStock
  }
})
