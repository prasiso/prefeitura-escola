import { Injectable } from '@angular/core';
import env from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EscolaService {
  private urlEscola = `${env.url}escola` || '';
  private url = `${env.url}` || '';
  resposta = {};
  constructor(private http: HttpClient) {}
  async listAll(filtros?:string) {
    try {
      const resp = await this.http
        .get<any | any[]>(`${this.urlEscola}?${filtros}`)
        .toPromise();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id: number) {
    try {
      ;
      const respTurma = await this.http
        .get<any | any[]>(`${this.url}turma?idEscola=${id}`)
        .toPromise();
      if (respTurma.length === 0) {
        var resp = await this.http
          .delete<any | any[]>(`${this.urlEscola}/${id}`)
          .toPromise();
      } else {
        return { status: 400, text: 'Foi encontrado Turma, nessa Escola' };
      }
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  async getId(id: string) {
    try {
      const get = await this.http
        .get<any | any[]>(`${this.urlEscola}/${id}`)
        .toPromise();
      return get;
    } catch (error) {
      console.log(error);
    }
  }
  async post(dados: object) {
    try {
      
      const post = await this.http
        .post<any | any[]>(`${this.urlEscola}`, dados)
        .toPromise();
        post.status = 200
      return post;
    } catch (error) {
      console.log(error);
    }
  }
  async update(dados: any) {
    try {
      const update = await this.http
        .put<any | any[]>(`${this.urlEscola}/${dados.id}`, dados)
        .toPromise();
        update.status = 200
      return update;
    } catch (error) {
      console.log(error);
    }
  }
}
