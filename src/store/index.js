import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas:[
      {descripcion:'Comprar pan', isCompletado:true},
      {descripcion:'Ir al medico', isCompletado:false},
      {descripcion:'Ordenar mi pieza',isCompletado:true},
      {descripcion:'Pasear al perro',isCompletado:false}
    ]
  },
  getters: {
  },
  mutations: {
    eliminarTarea(state, index){
      state.tareas.splice(index, 1);
    },
    marcarIncompleto(state,index){
      state.tareas[index].isCompletado = false;
    },
    marcarCompleto(state,index){
      state.tareas[index].isCompletado = true;
    },
    agregarTarea(state,texto){
      console.log(texto);
      state.tareas.push({descripcion:texto,isCompletado:false});
    }

  },
  actions: {
  },
  modules: {
  }
})
