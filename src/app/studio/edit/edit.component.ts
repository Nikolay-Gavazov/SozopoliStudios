import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudioService } from '../studio.service';
import { Studio } from 'src/app/shared/types/studio';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  studio!: any
  studioName!: string
  img!: string
  description!: string;
  id!:string
  isLoading: boolean = true;
  constructor(private studioService: StudioService,private apiService: ApiService, private activatedRoute: ActivatedRoute,private router: Router){
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'] || '';
    
    this.studioService.getStudio(this.id).subscribe((studio) =>{
        this.isLoading = false;
        this.studio = studio;
        this.studioName = this.studio.studioName;
        this.img = this.studio.img;
        this.description = this.studio.description;
      })
  }

  submit(form: NgForm){
    if(form.invalid){
      return;
    }
    const {studioName, img, description} = form.value;
    this.studioService.editStudio(this.id, {studioName, img, description}).subscribe((response)=>{
      
    });
    this.router.navigate([`/studios/${this.id}`])
  }
}
