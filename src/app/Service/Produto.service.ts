import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Produto } from "src/models/produto";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class ProdutoService {
  
    api: string = environment.api;
  
    constructor(private http: HttpClient) { }
  
    public ObterTodos(): Observable<Produto[]> {
      console.log("api", this.api)
      return this.http.get<Produto[]>(this.api + 'Produto/all');
    }
  
    public ObterPorId(id: number): Observable<Produto> {
      return this.http.get<Produto>(this.api + 'produto/' + id);
    }
  
    public Adicionar(produto: Produto): Observable<number> {
      return this.http.post<number>(this.api + "produto", produto);
    }
  
    public Editar(id: number, produto: Produto): Observable<number> {
      return this.http.put<number>(this.api + 'produto/' + id, produto);
    }
  
    public Deletar(id: Number): Observable<number> {
      return this.http.delete<number>(this.api + 'produto/' + id);
    }
}