import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';
import { LivroLista } from './livro-lista/livro-lista';
import { LivroDados } from './livro-dados/livro-dados';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroLista,
    LivroDados
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'lista', component: LivroLista },
      { path: 'dados', component: LivroDados },
      { path: '', redirectTo: 'lista', pathMatch: 'full' }
    ])
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
