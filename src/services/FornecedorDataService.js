import http from "../http-common";

class FornecedorDataService {
  getAll() {
    return http.get("/fornecedor");
  }

  findByCpf(cpf) {
    return http.get(`/fornecedor/cpf/${cpf}`);
  }

  findByNome(nome) {
    return http.get(`/fornecedor/nome/${nome}`);
  }

  create(data) {
    return http.post("/fornecedor", data);
  }

  update(cpf, data) {
    return http.put(`/fornecedor/${cpf}`, data);
  }

  delete(cpf) {
    return http.delete(`/fornecedor/${cpf}`);
  }
}

export default new FornecedorDataService();