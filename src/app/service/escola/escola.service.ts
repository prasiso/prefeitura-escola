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
  async listAll() {
    try {
      const resp = await this.http
        .get<any | any[]>(`${this.urlEscola}`)
        .toPromise();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id: number) {
    try {
      debugger;
      const respTurma = await this.http
        .get<any | any[]>(`${this.url}turma?idEscola=${id}`)
        .toPromise();
      if (respTurma.length === 0) {
        var resp = await this.http
          .delete<any | any[]>(`${this.urlEscola}/${id}`)
          .toPromise();
      } else {
        return {status:400, text:"Foi encontrado Turma, nessa Escola"}
      }
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
}
