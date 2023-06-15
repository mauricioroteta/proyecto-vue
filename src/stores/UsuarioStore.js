import axios from "axios";

const mockApiUrl = "https://6488930d0e2469c038fe04c7.mockapi.io/api";
const endpoint = "/users";

const url = mockApiUrl + endpoint;

export const UsuarioStore = {
  usuarios: [],

  created() {
    this.getData(url);
  },
  methdods: {
    async getData(url) {
      try {
        const { data } = await axios.get(url);
        this.usuarios = data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  findUser(username) {
    const usuario = this.usuarios.find((usuario) => usuario.username === username);
    return usuario ? usuario : ''
  },
  findPassword(password) {
    const pass = this.usuarios.find((password) => usuario.password === password);
    return pass ? pass : ''
  },
  productoCantidad(id) {
    const enCarrito = this.findById(id);
    return enCarrito ? enCarrito.cantidad : 0;
  },
};
