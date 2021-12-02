import { Component, OnInit } from '@angular/core';
import { ManufactureService } from 'src/services/manufacture.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.css']
})
export class ManufactureComponent implements OnInit {
  manufacturesData: any[] = [];

  constructor(private _manufactureService: ManufactureService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getManufacturesData();
  }

  getManufacturesData() {
    this._manufactureService.getManufactures().subscribe(
      (res: any) => {
        if (res.status) this.manufacturesData = res.data;
        else {
          this.manufacturesData = [];
          alert('no records found');
        }
        console.log(res);
      },
      (err) => {
        alert('something went wrong');
        console.log(err);
      }
    );
  }


  deleteManufactureData(id) {
    if (confirm("Are you sure to delete this records")) {
      this._manufactureService.deleteManufatcures(id).subscribe(
        (res: any) => {
          if (res.status) {
            this.manufacturesData = this.manufacturesData.filter((ele) => ele.id !== id);
            alert('delete record successfully');
          }
          else {
            alert('something went wrong');
          }
          console.log(res);
        },
        (err) => {
          alert('something went wrong');
          console.log(err);
        }
      );
    }
  }

}
