import { Component, OnInit } from '@angular/core';
import { DayList } from 'src/app/Core/models/DayList.models';
import { List } from 'src/app/Core/models/List.models';
import { DaylistService } from 'src/app/Services/DayList/daylist.service';
import { ListService } from 'src/app/Services/List/list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: List[] = [];

  daylists!: DayList[];

  constructor(
    private listService: ListService,
    private daylistservice: DaylistService
  ) {}

  ngOnInit(): void {
    this.getlist();
    this.getdaylist();
  }

  getlist() {
    this.listService.list().subscribe((data: any) => {
      this.list = data;
    });
  }

  delete(listId: number) {
    console.log(listId);

    this.listService.remove(listId).subscribe((data) => {
      this.getlist();
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

  getdaylist() {
    this.daylistservice.list().subscribe((data: any) => {
      this.daylists = data;
    });
  }
}
