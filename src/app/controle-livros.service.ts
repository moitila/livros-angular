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
      resumo: 'Um guia prático de Angular',
      autores: ['João da Silva']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript Moderno',
      resumo: 'Aprendendo com exemplos',
      autores: ['Maria Oliveira']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'CSS para Desenvolvedores',
      resumo: 'Layout e Design Responsivo',
      autores: ['Carlos Souza']
    }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo)) + 1
      : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}