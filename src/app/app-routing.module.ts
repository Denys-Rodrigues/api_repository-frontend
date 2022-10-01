import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { HomeComponent } from './home/home.component';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "produtos", component: ListProdutosComponent},

  {path: "produto", component: FormProdutoComponent},
  {path: "produto/id", component: FormProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
