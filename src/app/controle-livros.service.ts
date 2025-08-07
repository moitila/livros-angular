import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular para Iniciantes',
      resumo: 'Um guia completo sobre Angular.',
      autores: ['Fulano da Silva', 'Beltrano de Souza']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript na Prática',
      resumo: 'Aprenda TS do zero ao avançado.',
      autores: ['Ciclano Lima']
    }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    this.livros = this.livros.filter(livro => livro.codigo !== codigo);
  }
}