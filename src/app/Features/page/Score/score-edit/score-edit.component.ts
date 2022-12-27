import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Score } from 'src/app/Core/models/Score.models';
import { Students } from 'src/app/Core/models/Students.models';
import { Subject } from 'src/app/Core/models/Subject.models';
import { ScoreService } from 'src/app/Services/Score/score.service';
import { StudentsService } from 'src/app/Services/Students/students.service';
import { SubjectsService } from 'src/app/Services/Subjects/subjects.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-score-edit',
  templateUrl: './score-edit.component.html',
  styleUrls: ['./score-edit.component.scss'],
})
export class ScoreEditComponent implements OnInit {
  public dataform: FormGroup = new FormGroup([]);

  student!: Students[];
  subject!: Subject[];
  score!: Score;

  constructor(
    private scoreService: ScoreService,
    private studentService: StudentsService,
    private subjectService: SubjectsService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) {}
  private initializeForm(): void {
    this.dataform = new FormGroup({
      StudentId: new FormControl(''),
      SubjectId: new FormControl(''),
      rating: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getstudent();
    this.getsubject();
    this.getById();
  }

  getById() {
    let scoreId = this.activateRouter.snapshot.paramMap.get('id');
    console.log(scoreId);
    this.scoreService.loadById(scoreId).subscribe((data: any) => {
      this.score = data;
      this.dataform.setValue({
        StudentId: this.findstudentByName(this.score.StudentsId.name)?.id,
        SubjecId: this.findSubjectByName(this.score.SubjectId.name)?.id,
        rating: this.score.rating,
      });

      this.dataform.valueChanges.subscribe((data) => console.log(data));
    });
  }

  submit() {
    let scoreId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Score = {
      ...this.dataform.value,
      StudentsId: this.findstudentById(this.dataform.value.studentId),
      SubjectId: this.findSubjectById(this.dataform.value.subjectId),
    } as Score;

       edit.id = scoreId as any;
       this.Update(edit);
  }

  Update(score: Score) {
    this.scoreService.update(score).subscribe(
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
  goBack() {
    this.location.back();
  }

  findstudentByName(studentname: string) {
    return this.student.find((x) => x.name == studentname);
  }
  findstudentById(studentId: number) {
    return this.student.find((x) => x.id == studentId);
  }

  findSubjectByName(Bossname: string) {
    return this.subject.find((x) => x.name == Bossname);
  }
  findSubjectById(BossId: number) {
    return this.subject.find((x) => x.id == BossId);
  }

  getstudent() {
    this.studentService.list().subscribe((data: any) => {
      this.student = data;
    });
  }

  getsubject() {
    this.subjectService.list().subscribe((data: any) => {
      this.subject = data;
    });
  }
}
