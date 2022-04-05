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
  async listAll(id: any) {
    try {
      
      const resp = await this.http
        .get<any | any[]>(`${this.urlTurma}?idEscola=${id}`)
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
}
