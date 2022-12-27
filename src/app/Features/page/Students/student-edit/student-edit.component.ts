import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/Core/models/Students.models';
import { StudentsService } from 'src/app/Services/Students/students.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
})
export class StudentEditComponent implements OnInit {
  public dataform: FormGroup = new FormGroup([]);

  student!: Students;

  constructor(
    private studentService: StudentsService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getById();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      name: new FormControl(''),
    });
  }
  getById() {
    let studentId = this.activateRouter.snapshot.paramMap.get('id');
    console.log(studentId);
    this.studentService.loadById(studentId).subscribe((data: any) => {
      this.student = data;
      this.dataform.setValue({
        name: this.student.name,
      });
    });
  }
  goBack() {
    this.location.back();
  }

  submit() {
    let studentId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Students = {
      ...this.dataform.value,
    } as Students;

    edit.id = studentId as any;
    this.Updatestudent(edit);
  }

  Updatestudent(student: Students) {
    this.studentService.update(student).subscribe(
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
          title: 'Successfully edited',
        });
        this.goBack();
      },
      (error) => {
        Swal.fire(
          'Error',
          'incorrect data/500 (Internal Server Error)',
          'error'
        );
      }
    );
  }
}
