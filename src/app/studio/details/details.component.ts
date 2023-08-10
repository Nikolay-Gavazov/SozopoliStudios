import { Component, OnInit } from '@angular/core';
import { StudioService } from '../studio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  studio:any;
  isLoading: boolean = true;

  constructor(private studioService: StudioService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'] || '';
    
    this.studioService.getStudio(id).subscribe((studio) =>{
        this.isLoading = false;
        this.studio = studio;
      })
  }
}
