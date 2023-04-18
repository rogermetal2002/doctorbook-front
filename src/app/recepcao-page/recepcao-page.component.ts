import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-recepcao-page',
  templateUrl: './recepcao-page.component.html',
  styleUrls: ['./recepcao-page.component.css']
})
export class RecepcaoPageComponent {
  //(String nome, String cpf, String telefone, String endereco, String nascimento, String genero, String relatorio, String expediente)
  form = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    nascimento: new FormControl(''),
    genero: new FormControl(''),
    relatorio: new FormControl(''),
    expediente: new FormControl(''),
    id: new FormControl('')
  })
  // Código Angular Material para gerar tabela
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'endereco','nascimento','genero','acoes'];
  
  dados: any[] = [];
  constructor(private service: ApiService) {

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.'); apagar essa linha
    this.service.listarRecepcao().subscribe({
      next: (res) => {
        console.log(res);
        this.dados=res as any[];
      },
      error: (res) => {
        console.log(res);
      },
    })
  }

  enviarRecepcao() {
    const cadastro = this.form.value;
    console.log(cadastro);

    this.service.cadastrarRecepcao(cadastro).subscribe({
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
  excluirRecepcao() {
    let item = { id: this.toDelete.id }
    console.log(item);
    this.service.excluirRecepcao(item).subscribe({
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
    console.log(this.toDelete);
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

  editarRecepcao() {
    const cadastro = this.form.value;
    console.log(cadastro);

    this.service.updateRecepcao(cadastro).subscribe({
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
      this.service.searchRecepcao(this.searchField.value!).subscribe({
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
