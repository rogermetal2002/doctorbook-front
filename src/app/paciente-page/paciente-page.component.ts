import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { environment } from '../environment';

@Component({
  selector: 'app-paciente-page',
  templateUrl: './paciente-page.component.html',
  styleUrls: ['./paciente-page.component.css']
})



export class PacientePageComponent implements OnInit {
  @ViewChild('fileInput') inputRef!: ElementRef;
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
    foto: new FormControl(),
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
  uploadFoto(idUsuario: any) {
    const formData = new FormData();
    formData.append('file', this.arquivoSelecionado!);

    this.service.uploadArquivo(formData, idUsuario, 'PACIENTE', true).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
  updateFoto(idUsuario: any) {
    const formData = new FormData();
    formData.append('file', this.arquivoSelecionado!);

    this.service.alterarPerfil(formData, idUsuario).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
  arquivoSelecionado: File | undefined;
  imagemSelecionada: string | ArrayBuffer | null | undefined;
  changeFoto(event: any) {    
    this.arquivoSelecionado = event.target.files[0];
    console.log(this.arquivoSelecionado);
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagemSelecionada = e.target.result;
      }
      reader.readAsDataURL(file);
    }else{
      this.imagemSelecionada = null;
    }
  }
  removeFoto(){
    this.inputRef.nativeElement.value = '';
    this.imagemSelecionada = null;    
  }

  enviarPaciente() {
    const valor = this.form.value;
    const cadastro = {
      nome: valor.nome,
      cpf: valor.cpf,
      telefone: valor.telefone,
      endereco: valor.endereco,
      nascimento: valor.nascimento,
      genero: valor.genero,
      evolucao: valor.evolucao,
      agenda: valor.agenda,
      descricaoAgenda: valor.descricaoAgenda
    };
    console.log(cadastro);

    this.service.cadastrarPaciente(cadastro).subscribe({
      next: (res: any) => {
        console.log(res);
        this.uploadFoto(res.id);
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
  toEdit: any = {}
  urlImage = environment.api + 'arquivo/get-perfil?id=';
  ativaEdicao(cadastro: any) {
    this.removeFoto();
    this.editMode = true;
    console.log(cadastro);
    this.toEdit = cadastro;
    this.form.setValue({ ...cadastro, foto: '' })
  }
  desativaEdicao() {
    this.editMode = false;
    this.form.reset();
  }

  editarPaciente() {
    const valor = this.form.value;
    const cadastro = {
      nome: valor.nome,
      cpf: valor.cpf,
      telefone: valor.telefone,
      endereco: valor.endereco,
      nascimento: valor.nascimento,
      genero: valor.genero,
      evolucao: valor.evolucao,
      agenda: valor.agenda,
      descricaoAgenda: valor.descricaoAgenda,
      id: valor.id
    };

    console.log(cadastro);

    this.service.updatePaciente(cadastro).subscribe({
      next: (res) => {
        console.log(res);
        this.desativaEdicao();
        this.updateFoto(cadastro.id);
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

