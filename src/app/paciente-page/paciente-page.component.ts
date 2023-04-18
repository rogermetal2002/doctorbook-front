import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-paciente-page',
  templateUrl: './paciente-page.component.html',
  styleUrls: ['./paciente-page.component.css']
})



export class PacientePageComponent implements OnInit {
  //(String nome, String cpf, String telefone, String endereco, String nascimento, String genero, String evolucao, String agenda, String descricaoAgenda)
  form = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    nascimento: new FormControl(''),
    genero: new FormControl(''),
    evolucao: new FormControl(''),
    agenda: new FormControl(''),
    descricaoAgenda: new FormControl(''),
    id: new FormControl('')
  })


  //     private String nome;
  //     private String cpf;
  //     private String telefone;
  //     private String endereco;
  //     private String nascimento;
  //     private String genero;
  // Código Angular Material para gerar tabela
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'endereco', 'nascimento', 'genero', 'acoes'];



  dados: any[] = [];
  constructor(private service: ApiService) {

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.'); apagar essa linha
    this.service.listarPaciente().subscribe({
      next: (res) => {
        console.log(res);
        this.dados = res as any[];
      },
      error: (res) => {
        console.log(res);
      },
    })
  }
  enviarPaciente() {
    const cadastro = this.form.value;
    console.log(cadastro);

    this.service.cadastrarPaciente(cadastro).subscribe({
      next: (res) => {
        console.log(res);
        this.form.reset();
        this.ngOnInit();
      },
      error: (res) => {
        console.log(res);
      },
    })
  }
  excluirPaciente() {
    let item = { id: this.toDelete.id }
    console.log(item);
    this.service.excluirPaciente(item).subscribe({
      next: (res) => {
        console.log(res);
        this.ocultar();
        this.ngOnInit();
      },
      error: (res) => {
        console.log(res);
      },
    })
  }
  modal = false;
  toDelete = { id: 0 }
  exibir(item: any) {
    this.toDelete = item;
    this.modal = true;
  }
  ocultar() {
    this.modal = false;
  }
  //Lógica do upload
  editMode = false;
  toEdit = {}
  ativaEdicao(cadastro: any) {
    this.editMode = true;
    console.log(cadastro);
    this.toEdit = cadastro;
    this.form.setValue({ ...cadastro })
  }
  desativaEdicao() {
    this.editMode = false;
    this.form.reset();
  }

  editarPaciente() {
    const cadastro = this.form.value;
    console.log(cadastro);

    this.service.updatePaciente(cadastro).subscribe({
      next: (res) => {
        console.log(res);
        this.desativaEdicao();
        this.ngOnInit();
      },
      error: (res) => {
        console.log(res);
      },
    })
  }
  //Pesquisar 
  onSubmit(event: any) {
    //alert('pesquisa feita');
    //console.log(this.searchField.value);
    this.service.searchPaciente(this.searchField.value!).subscribe({
      next: (res: any) => {
        this.dados = res;
      },
      error: (res) => {
        console.log(res);
      },
    })
  }
  searchField = new FormControl('');
}

