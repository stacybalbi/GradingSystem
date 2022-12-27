import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/Core/models/Students.models';
import { StudentsService } from 'src/app/Services/Students/students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  student: Students[] = [];

  constructor( 
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    this.getstudent();
  }

  getstudent(){
    this.studentService.list().subscribe((data : any) => {
      this.student = data
    });
  }

  delete(studentId: number){
    console.log(studentId);

    this.studentService.remove(studentId).subscribe(data =>{this.getstudent();})

  }
  

  ShowModal(id: number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
 

  loadById(id: any){
    return null;
  }


}
