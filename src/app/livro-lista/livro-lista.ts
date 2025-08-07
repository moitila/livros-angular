import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.html'
})
export class LivroLista implements OnInit {
  livros: Livro[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}