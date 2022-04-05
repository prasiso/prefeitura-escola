import { Injectable } from '@angular/core';
import env from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  private urlTurma = `${env.url}turma` || '';
  private url = `${env.url}` || '';
  resposta = {};
  constructor(private http: HttpClient) {}
  async listAll(id?: any) {
    try {
      
      const resp = await this.http
        .get<any | any[]>(`${this.urlTurma}${id?`?idEscola=${id}`:''}`)
        .toPromise();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id: number) {
    try {
      const respTurma = await this.http
        .get<any | any[]>(`${this.url}turma?idEscola=${id}`)
        .toPromise();
      if (respTurma.length === 0) {
        var resp = await this.http
          .delete<any | any[]>(`${this.urlTurma}/${id}`)
          .toPromise();
      } else {
        return {status:400, text:"Foi encontrado Turma, nessa Escola"}
      }
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteEscola(id: number) {
    try {
      const respTurma = await this.http
        .get<any | any[]>(`${this.url}turma?idEscola=${id}`)
        .toPromise();
        
        for (const resp of respTurma) {
          await this.http
          .delete<any | any[]>(`${this.urlTurma}/${resp.id}`)
          .toPromise();
        }
        await this.http
          .delete<any | any[]>(`${this.url}escola/${id}`)
          .toPromise();
      return respTurma;
    } catch (error) {
      console.log(error);
    }
  }

  async getId(id: number) {
    try {
      const get = await this.http
        .get<any | any[]>(`${this.urlTurma}/${id}`)
        .toPromise();
      return get;
    } catch (error) {
      console.log(error);
    }
  }
  async post(dados: object) {
    try {
      
      const post = await this.http
        .post<any | any[]>(`${this.urlTurma}`, dados)
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
        .put<any | any[]>(`${this.urlTurma}/${dados.id}`, dados)
        .toPromise();
        update.status = 200
      return update;
    } catch (error) {
      console.log(error);
    }
  }
}
