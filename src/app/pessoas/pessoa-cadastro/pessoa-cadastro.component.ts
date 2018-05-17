import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { Pessoa } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from './../pessoa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  estados = [
    { label: 'AC', value: 1 },
    { label: 'AL', value: 2 },
    { label: 'AP', value: 3 },
    { label: 'AM', value: 4 },
    { label: 'BA', value: 5 },
    { label: 'CE', value: 6 },
    { label: 'DF', value: 7 },
    { label: 'ES', value: 8 },
    { label: 'GO', value: 9 },
    { label: 'MA', value: 10 },
    { label: 'MT', value: 11 },
    { label: 'MS', value: 12 },
    { label: 'MG', value: 13 },
    { label: 'PA', value: 14 },
    { label: 'PB', value: 15 },
    { label: 'PR', value: 16 },
    { label: 'PE', value: 17 },
    { label: 'PI', value: 18 },
    { label: 'RJ', value: 19 },
    { label: 'RN', value: 20 },
    { label: 'RS', value: 21 },
    { label: 'RO', value: 22 },
    { label: 'RR', value: 23 },
    { label: 'SC', value: 24 },
    { label: 'SP', value: 25 },
    { label: 'SE', value: 26 },
    { label: 'TO', value: 27 },
  ];

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
    .then(() => {
      this.toasty.success('Pessoa adicionada com sucesso!');
      form.reset();
      this.pessoa = new Pessoa();
    });
  }
}
