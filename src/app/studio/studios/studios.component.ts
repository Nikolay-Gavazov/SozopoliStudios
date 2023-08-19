import { Component, OnInit } from '@angular/core';
import { Studio } from 'src/app/shared/types/studio';
import { StudioService } from '../studio.service';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {
  studiosList: Studio[] = [];
  studio1: Studio[] = [];
  isLoading: boolean = true;

  constructor(private studioService: StudioService) { }

  ngOnInit(): void {
    this.studioService.getStudios().subscribe({
      next: (studios) => {
        this.isLoading = false;
        this.studiosList = studios;
        this.studio1 = this.studiosList.splice(0, 1);
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);

      }
    })
  }
}
