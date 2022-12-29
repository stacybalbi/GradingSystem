import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/Core/models/Score.models';
import { Students } from 'src/app/Core/models/Students.models';
import { Subject } from 'src/app/Core/models/Subject.models';
import { ScoreService } from 'src/app/Services/Score/score.service';
import { StudentsService } from 'src/app/Services/Students/students.service';
import { SubjectsService } from 'src/app/Services/Subjects/subjects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss'],
})
export class ScoreListComponent implements OnInit {
  score!: Score[];

  students!: Students[];
  subject!: Subject[];

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.getscore();
  }

  getscore() {
    this.scoreService.list().subscribe((data : any) => {
      this.score = data;
    });
  }

  delete(scoreId: number) {
    console.log(scoreId);

    this.scoreService.remove(scoreId).subscribe((data) => {
      this.getscore();
    });
  }

  ShowModal(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  loadById(id: any) {
    return null;
  }
}
