import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.api;
  constructor(private httpClient: HttpClient) { }

  //Cadastrar dados
  cadastrarFinanceiro(cadastro: any) {
    return this.httpClient.post(this.api + 'financeiro', cadastro)
  }

  cadastrarPaciente(cadastro: any) {
    return this.httpClient.post(this.api + 'paciente', cadastro)
  }

  cadastrarDoutor(cadastro: any) {
    return this.httpClient.post(this.api + 'doutor', cadastro)
  }

  cadastrarRecepcao(cadastro: any) {
    return this.httpClient.post(this.api + 'recepcao', cadastro)
  }

  //Listar dados cadastrados
  listarPaciente() {
    return this.httpClient.get(this.api + 'paciente')
  }
  listarRecepcao() {
    return this.httpClient.get(this.api + 'recepcao')
  }
  listarDoutor() {
    return this.httpClient.get(this.api + 'doutor')
  }
  listarFinanceiro() {
    return this.httpClient.get(this.api + 'financeiro')
  }

  // Excluir dados
  excluirPaciente(cadastro: any) {
    return this.httpClient.delete(this.api + 'paciente?id=' + cadastro.id)
  }
  excluirDoutor(cadastro: any) {
    return this.httpClient.delete(this.api + 'doutor?id=' + cadastro.id)
  }
  excluirRecepcao(cadastro: any) {
    return this.httpClient.delete(this.api + 'recepcao?id=' + cadastro.id)
  }
  excluirFinanceiro(cadastro: any) {
    return this.httpClient.delete(this.api + 'financeiro?id=' + cadastro.id)
  }

  // Update
  updatePaciente(cadastro: any) {
    return this.httpClient.put(this.api + 'paciente', cadastro)
  }
  updateFinanceiro(cadastro: any) {
    return this.httpClient.put(this.api + 'financeiro', cadastro)
  }
  updateDoutor(cadastro: any) {
    return this.httpClient.put(this.api + 'doutor', cadastro)
  }
  updateRecepcao(cadastro: any) {
    return this.httpClient.put(this.api + 'recepcao', cadastro)
  }

  //Pesquisar
  searchPaciente(termo: string) {
    return this.httpClient.get(this.api + 'paciente/search?termo=' + termo);
  }
  searchDoutor(termo: string) {
    return this.httpClient.get(this.api + 'doutor/search?termo=' + termo);
  }
  searchRecepcao(termo: string) {
    return this.httpClient.get(this.api + 'recepcao/search?termo=' + termo);
  }
  searchFinanceiro(termo: string) {
    return this.httpClient.get(this.api + 'financeiro/search?termo=' + termo);
  }
}
