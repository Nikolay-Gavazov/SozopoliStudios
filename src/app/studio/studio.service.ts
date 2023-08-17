import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studio } from '../shared/types/studio';
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor(private http: HttpClient) { }

  getStudios() {
    return this.http.get<Studio[]>(`${apiUrl}/studios`)
  }
  getStudio(id: string) {
    return this.http.get<Studio[]>(`${apiUrl}/studios/${id}`)
  }
  editStudio(id: string, { studioName, img, description }: any) {
    return this.http.put<Studio>(`${apiUrl}/studios/edit/${id}`, { studioName, img, description })
  }
  createStudio(studioName: string, img: string, description: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post(`${apiUrl}/studios`, { studioName, img, description })
  }
  deleteStudio(id: string) {
    return this.http.delete(`${apiUrl}/studios/delete/${id}`);
  }
}
