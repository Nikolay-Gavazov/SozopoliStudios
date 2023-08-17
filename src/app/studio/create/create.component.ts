import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudioService } from '../studio.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private studioService: StudioService, private router: Router) {

  }
  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { studioName, img, description } = form.value;
    this.studioService.createStudio(studioName, img, description).subscribe((response) => {
      this.router.navigate(["/studios"])
    });
  }
}
