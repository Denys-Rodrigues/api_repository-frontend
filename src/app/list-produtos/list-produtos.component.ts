import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/models/produto';
import { ProdutoService } from '../Service/Produto.service';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  constructor(private route: Router, private ProdutoService: ProdutoService) { }

  produtos: Produto[] = [];

  cadastrarProduto() {
    this.route.navigate(["/produto"]);
  }

  ngOnInit(): void {
    this.obterTodos();
    
  }

  obterTodos() {

    this.ProdutoService.ObterTodos().subscribe(
      {
        next: dados => {
          console.log(dados)
          this.produtos = dados;
        },
        error:(err) => {
          console.log(err)
        }
      }     
      
    );
  }
}
