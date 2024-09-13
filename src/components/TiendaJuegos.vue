<script>
import { useJuegosStore } from '@/stores/juegos'
import { mapStores } from 'pinia'

export default {
  name: 'TiendaJuegos',
  computed: {
    ...mapStores(useJuegosStore)
  },
  created() {
    this.juegosStore.fetchJuegos()
  },
  methods: {
    sumarStock(codigo) {
      this.juegosStore.aumentarStock(codigo)
    },
    restarStock(codigo) {
      this.juegosStore.disminuirStock(codigo)
    }
  }
}
</script>
<template>
  <div class="container">
    <h1>Tienda 32 Bits</h1>

    <h3>Lista de Juegos</h3>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegosStore.juegos" :key="juego.codigo">
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td class="buttons">
              <button @click="sumarStock(juego.codigo)">+</button>
              <button @click="restarStock(juego.codigo)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.table,
thead,
th,
tr,
td {
  border: 1px solid;
}
h1,
h3 {
  text-align: center;
}
button {
  margin-left: 5px;
}
</style>
