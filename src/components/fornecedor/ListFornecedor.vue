<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <a href="/add-fornecedor">Novo fornecedor</a>  
        </div>
      </div>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Pesquisar por cpf"
            v-model="cpf"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchCpf"
            >
              Pesqusiar
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Pesquisar por nome"
            v-model="nome"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchNome"
            >
              Pesqusiar
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Fornecedores</h4>
        <table class="table">
            <thead>
                <td>CPF/CNPJ</td>
                <td>Nome</td>
                <td>Editar</td>
                <td>Excluir</td>
            </thead>
            <tbody>
                <tr v-for="(fornecedor, index) in fornecedors" :key="index">
                    <td>{{ fornecedor.cpf }}</td>
                    <td>{{ fornecedor.nome }}</td>
                    <td><button>E</button></td>
                    <td><button @click="deleteFornecedor(fornecedor.cpf)">X</button></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import FornecedorDataService from "./../../services/FornecedorDataService";
  
  export default {
    name: "list-fornecedor",
    data() {
      return {
        fornecedors: [],
        currentTutorial: null,
        currentIndex: -1,
        cpf: "",
        nome: ""
      };
    },
    methods: {
      retrieveFornecedors() {
        FornecedorDataService.getAll()
          .then(response => {
            this.fornecedors = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
    //   refreshList() {
    //     this.retrieveTutorials();
    //     this.currentTutorial = null;
    //     this.currentIndex = -1;
    //   },
  
    //   setActiveTutorial(tutorial, index) {
    //     this.currentTutorial = tutorial;
    //     this.currentIndex = tutorial ? index : -1;
    //   },
  
    //   removeAllTutorials() {
    //     TutorialDataService.deleteAll()
    //       .then(response => {
    //         console.log(response.data);
    //         this.refreshList();
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   },
      searchCpf() {
        FornecedorDataService.findByCpf(this.cpf)
          .then(response => {
            this.fornecedors = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },

      searchNome() {
        FornecedorDataService.findByNome(this.nome)
          .then(response => {
            this.fornecedors = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },

      deleteFornecedor(cpf) {
        FornecedorDataService.delete(cpf)
          .then(response => {
            this.retrieveFornecedors();
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveFornecedors();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>