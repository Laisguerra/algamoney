import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';

import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriaService } from './../categorias/categoria.service';

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ErrorHandlerService,
    CategoriaService,

    ConfirmationService,
  ]
})
export class CoreModule { }
