import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/Services/Students/students.service';
import { Location } from '@angular/common';
import { StudentsDto } from 'src/app/Core/models/Students/StudentsDto.models';
import Swal from 'sweetalert2';
import { Students } from 'src/app/Core/models/Students.models';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent implements OnInit {
  public dataform: FormGroup = new FormGroup([]);

  constructor(
    private studentService: StudentsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      name: new FormControl(''),
    });
  }

  goBack() {
    this.location.back();
  }

  submit() {
    const createstudent: Students = {
      ...this.dataform.value,
    } as Students;

    console.log(createstudent)

    this.studentService.create(createstudent).subscribe(
      () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Successfully created',
        });
        this.goBack();
      },
      () => {
        Swal.fire(
          'Error',
          'incorrect data/500 (Internal Server Error)',
          'error'
        );
      }
    );
  }
}
