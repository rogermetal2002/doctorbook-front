import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-financeiro-page',
  templateUrl: './financeiro-page.component.html',
  styleUrls: ['./financeiro-page.component.css']
})

export class FinanceiroPageComponent {
  // String nome, String cpf, String telefone, String endereco, String nascimento, String genero, String receita, String despesa
  form = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    nascimento: new FormControl(''),
    genero: new FormControl(''),
    receita: new FormControl(''),
    despesa: new FormControl(''),
    id: new FormControl('')

  })
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'endereco','nascimento','genero','acoes'];

  dados: any[] = [];
  constructor(private service: ApiService) {

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.'); apagar essa linha
    this.service.listarFinanceiro().subscribe({
      next: (res) => {
        console.log(res);
        this.dados=res as any[];
      },
      error: (res) => {
        console.log(res);
      },
    })
  }

  enviarFinanceiro() {
    const cadastro = this.form.value;
    console.log(cadastro);

    this.service.cadastrarFinanceiro(cadastro).subscribe({
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
  excluirFinanceiro() {
    let item = { id: this.toDelete.id }
    console.log(item);
    this.service.excluirFinanceiro(item).subscribe({
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

  editarFinanceiro() {
    const cadastro = this.form.value;
    console.log(cadastro);

    this.service.updateFinanceiro(cadastro).subscribe({
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
    this.service.searchFinanceiro(this.searchField.value!).subscribe({
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

