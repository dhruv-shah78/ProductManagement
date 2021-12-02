import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ManufactureModel } from 'src/shared/models/manufactureModel';


@Injectable({
  providedIn: 'root'
})
export class ManufactureService {

  constructor(private apiService: ApiService) { }

  getManufactures() {
    const path = `Manufacture/GetManufacturers`;
    return this.apiService.getRequest(path);
  }

  addManufactures(data: ManufactureModel) {
    const path = `Manufacture/AddManufacturer`;
    return this.apiService.postRequest(path, data);
  }

  updateManufactures(data: ManufactureModel) {
    const path = `Manufacture/UpdateManufacturer`;
    return this.apiService.postRequest(path, data);
  }

  deleteManufatcures(manufactureId: number) {
    const path = `Manufacture/DeleteManufacturer?manufactureId=${manufactureId}`;
    return this.apiService.deleteRequest(path);
  }

}
