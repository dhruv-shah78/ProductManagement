import { Component, OnInit } from '@angular/core';
import { ManufactureService } from 'src/services/manufacture.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-edit-manufacture',
  templateUrl: './add-edit-manufacture.component.html',
  styleUrls: ['./add-edit-manufacture.component.css']
})
export class AddEditManufactureComponent implements OnInit {
  isBtnDisabled: boolean = false;
  manufactureForm: FormGroup;
  submitted: boolean = false;
  editId: number;
  btnLable: string;
  manufacturesData: any[] = [];
  constructor(private _manufactureService: ManufactureService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.editId = +parseInt(params["id"]);
        this.btnLable = this.editId ? 'Edit Record' : 'Add Record';
        if (this.editId)
          this.getManufacturesData();
      }
    );

    this.manufactureForm = this.formBuilder.group({
      id: [this.editId ? this.editId : 0],
      manufactureName: ['', Validators.required],
      vehicle: ['', Validators.required]
    });
  }

  getManufacturesData() {
    this._manufactureService.getManufactures().subscribe(
      (res: any) => {
        if (res.status) {
          const data = res.data.find((ele) => ele.id === this.editId);
          if (data === undefined)
            this.router.navigateByUrl('/add-edit-manufacture');
          else
            this.manufactureForm.patchValue({
              'manufactureName': data.manufactureName,
              'vehicle': data.vehicle
            });
        }
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

  saveOrUpdate() {
    this.isBtnDisabled = true;
    this.submitted = true;
    if (this.manufactureForm.invalid)
      return;


    if (this.editId) {
      this._manufactureService.updateManufactures(this.manufactureForm.value).subscribe((res: any) => {
        if (res.status) {
          alert(res.msg);
          this.router.navigateByUrl('/manufacture');
        }
      }, err => {
        console.log(err);
        alert('something went wrong')
      })
    }
    else {
      this._manufactureService.addManufactures(this.manufactureForm.value).subscribe((res: any) => {
        if (res.status) {
          alert(res.msg);
          this.router.navigateByUrl('/manufacture');
        }
      }, err => {
        console.log(err);
        alert('something went wrong')
      })
    }

  }

  get form() { return this.manufactureForm.controls; }

}
