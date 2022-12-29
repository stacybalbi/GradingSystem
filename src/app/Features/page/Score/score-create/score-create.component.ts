import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScoreService } from 'src/app/Services/Score/score.service';
import { Location } from '@angular/common';
import { Score } from 'src/app/Core/models/Score.models';
import Swal from 'sweetalert2';
import { StudentsService } from 'src/app/Services/Students/students.service';
import { SubjectsService } from 'src/app/Services/Subjects/subjects.service';
import { Students } from 'src/app/Core/models/Students.models';
import { Subject } from 'src/app/Core/models/Subject.models';

@Component({
  selector: 'app-score-create',
  templateUrl: './score-create.component.html',
  styleUrls: ['./score-create.component.scss'],
})
export class ScoreCreateComponent implements OnInit {
  public dataform: FormGroup = new FormGroup([]);

  students!: Students[];
  subject!: Subject[];

  constructor(
    private scoreervice: ScoreService,

    private studentservice: StudentsService,
    private subjectService: SubjectsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.getstudent();
    this.getsubject();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      StudentsId: new FormControl(''),
      SubjectId: new FormControl(''),
      rating: new FormControl(''),
    });
  }

  goBack() {
    this.location.back();
  }

  submit() {
    const createstudent: Score = {
      ...this.dataform.value,
    } as Score;

    console.log(createstudent);

    this.scoreervice.create(createstudent).subscribe(
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

  getstudent() {
    this.studentservice.list().subscribe((data: any) => {
      this.students = data;
    });
  }

  getsubject() {
    this.subjectService.list().subscribe((data: any) => {
      this.subject = data;
    });
  }
}
