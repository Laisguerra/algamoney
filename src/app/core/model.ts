import { PessoaCadastroComponent } from '../pessoas/pessoa-cadastro/pessoa-cadastro.component';

export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export class Pessoa {
  nome: string;
  codigo: number;
  endereco = new Endereco();
  ativo = true;
}

export class Categoria {
  codigo: number;
  nome: string;
}

export class Lancamento {
  codigo: number;
  tipo: 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}
