import { Lancamento } from './../../core/model';
import { ConfirmationService } from 'primeng/api';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private lancamentoService: LancamentoService) { }

  ngOnInit() {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: ('Deseja excluir esse lançamento?'),
      accept: (() => {
        this.excluir(lancamento);
      }),
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
    .then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
      this.grid.first = 0;
      }
      this.toasty.success('Lançamento excluído com sucesso!');
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizar(lancamento: Lancamento) {

  }

}
