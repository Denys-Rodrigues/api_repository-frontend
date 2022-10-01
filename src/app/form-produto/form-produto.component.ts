import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto';
import { ProdutoService } from '../Service/Produto.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private ProdutoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  model: Produto = new Produto;

  voltarParaLista() {
    this.router.navigate(["produto"]);
  }

  OnSubmit(): void {
    var id: number = this.route.snapshot.params['id'];

    if (id > 0) {
      this.ProdutoService.Editar(id, this.model).subscribe((data) => {
        if (data > 0) {
          alert('Produto alterado com sucesso!');
          this.voltarParaLista();
        }
      });
    }
    else {
      console.log(this.model)
      this.ProdutoService.Adicionar(this.model).subscribe({
        next:(data) => {
        if (data) {
          alert('Produto adicionado com sucesso!');
          this.voltarParaLista();
        }
      },
      error: err => console.log(err)  
    });
    }
  }

  ngOnInit(): void {
  }

  obterPorId() {
    var id: number = this.route.snapshot.params['id'];

    this.ProdutoService.ObterPorId(id).subscribe(

      dados => {
        this.model = dados;
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
