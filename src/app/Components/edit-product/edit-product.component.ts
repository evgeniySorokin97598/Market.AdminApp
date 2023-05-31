import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { CharacteristicType, Charastitic, Product } from 'src/app/Logic/Entities/Product';
import { AddCharecteristicsRequest } from 'src/app/Logic/Requests/AddCharecteristics';
import { BaseService } from 'src/app/Logic/Services/BaseService';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
 
   
})

export class EditProductComponent implements OnInit {
  private removeid:number[] = []; /// id характеристик которые нужно удалить
  private _typeCharacteristic: CharacteristicType = new CharacteristicType();
  public get typeCharacteristic(): CharacteristicType {
    return this._typeCharacteristic;
  }

 @Input() public ProductId:number = 0;

  @Input()
public set typeCharacteristic(value: CharacteristicType) {
    this._typeCharacteristic = value;
    value.charastitics.forEach(p => {
      this.dataToDisplay.push(p);
      this.dataSource.setData(this.dataToDisplay)
    })
  }

  public async Save()
  {
    let request:AddCharecteristicsRequest = new AddCharecteristicsRequest();
    request.name = this.typeCharacteristic.name;
    request.productId = this.ProductId;
    request.charastitics = this._typeCharacteristic.charastitics;
    request.removeId = this.removeid;
    this.removeid = [];
    await this._service.AddCharectiristics(request);
  }

; ///массив с характеристиками товара
   
   
  //positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  displayedColumns: string[] = ['name', 'text' ,'position'  ];
  dataToDisplay = [...this.typeCharacteristic.charastitics];
  dataSource = new ExampleDataSource(this.dataToDisplay);
  
  constructor(private _router: ActivatedRoute,private _service: BaseService) { 
    
    console.log( "charastitics: " +  this.typeCharacteristic.charastitics.length);
  }
  
  async ngOnInit(): Promise<void> {
     
  }
  addData() {
    let t = new Charastitic();
    this.dataToDisplay.push(t);
    this._typeCharacteristic.charastitics.push(t);
      this.dataSource.setData(this.dataToDisplay)
    this.dataSource.setData(this.dataToDisplay);
  }


  
  removeData(charc:Charastitic) 
  {
    
      const index = this.dataToDisplay.indexOf(charc, 0);
      if (index > -1) {
        this.dataToDisplay.splice(index, 0);
      }

    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
    this.removeid.push(charc.charastiticId);
  }

}

class ExampleDataSource extends DataSource<Charastitic> {
  private _dataStream = new ReplaySubject<Charastitic[]>();

  constructor(initialData: Charastitic[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Charastitic[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Charastitic[]) {
    this._dataStream.next(data);
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
 