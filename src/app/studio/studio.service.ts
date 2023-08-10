import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studio } from '../shared/types/studio';
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  
  constructor(private http: HttpClient) { }

  getStudios(){
    return this.http.get<Studio[]>(`${apiUrl}/studios`)
  }
  getStudio(id: string){
    return this.http.get<Studio[]>(`${apiUrl}/studios/${id}`)
  }
}
