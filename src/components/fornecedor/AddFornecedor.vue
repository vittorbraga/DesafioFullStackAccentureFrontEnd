<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="cpf">CPF</label>
          <input
            type="text"
            class="form-control"
            id="cpf"
            required
            v-model="fornecedor.cpf"
            name="cpf"
            @change="setIsPessoaFisica()"
          />
        </div>
  
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            class="form-control"
            id="nome"
            required
            v-model="fornecedor.nome"
            name="nome"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            class="form-control"
            id="email"
            required
            v-model="fornecedor.email"
            name="email"
            type="email"
          />
        </div>

        <div class="form-group">
          <label for="cep">CEP</label>
          <input
            class="form-control"
            id="cep"
            required
            v-model="fornecedor.cep"
            name="cep"
          />
        </div>

        <div v-if="isPessoaFisica">
          <div class="form-group">
            <label for="rg">RG</label>
            <input
              class="form-control"
              id="rg"
              required
              v-model="fornecedor.rg"
              name="rg"
            />
          </div>

          <div class="form-group">
            <label for="dataNascimento">Data de Nascimento</label>
            <input
              class="form-control"
              id="dataNascimento"
              required
              v-model="fornecedor.dataNascimento"
              name="dataNascimento"
              type="date"
            />
          </div>
        </div>
  
        <div class="form-group">
          {{ error }}
        </div>

        <button @click="saveFornecedor" class="btn btn-success">Salvar</button>
      </div>
  
      <div v-else>
        <h4>Fornecedor adicionado!</h4>
        <button class="btn btn-success" @click="newFornecedor">Deseja adicionar outro?</button>
      </div>
    </div>
  </template>
  
  <script>
  import FornecedorDataService from "./../../services/FornecedorDataService";
  
  export default {
    name: "add-fornecedor",
    data() {
      return {
        fornecedor: {
          cpf: "",
          nome: "",
          email: "",
          cep: "",
          rg: "",
          dataNascimento: ""
        },
        isPessoaFisica: false,
        error: "",
        submitted: false
      };
    },
    methods: {
      saveFornecedor() {
        var data = {
          cpf: this.fornecedor.cpf,
          nome: this.fornecedor.nome,
          email: this.fornecedor.email,
          cep: this.fornecedor.cep,
          rg: this.fornecedor.rg,
          dataNascimento: this.fornecedor.dataNascimento
        };
  
        FornecedorDataService.create(data)
          .then(response => {
            this.fornecedor.cpf = response.data.cpf;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newFornecedor() {
        this.submitted = false;
        this.fornecedor = {};
      },

      setIsPessoaFisica() {
        if(this.fornecedor.cpf.length == 11) {
            this.isPessoaFisica = true;
            this.fornecedor.rg = "";
            this.fornecedor.dataNascimento = "";
        }else {
            this.isPessoaFisica = false;
        }
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>