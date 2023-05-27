import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CharacteristicType, Charastitic, CommentEntity, Product } from 'src/app/Logic/Entities/Product';
import { ProductsHelper } from 'src/app/Logic/Helpers/ProductsHelper';
import { BaseService } from 'src/app/Logic/Services/BaseService';
import { IdentetyService } from 'src/app/Logic/Services/IdentetyService';
 
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  
})
export class ProductPageComponent implements OnInit {
  

  public Product:Product = new Product();
   
  images:string[] = [];
  currentRate:number = 2;
  comment:CommentEntity = new CommentEntity();
   
  
  constructor(private _router: ActivatedRoute,private _service: BaseService,private _identetyService :IdentetyService, config: NgbRatingConfig, private helper:ProductsHelper,private modalService: NgbModal,private _router2: Router) { 
 
    config.max = 5;
    config.readonly = true;
  }

  

  async ngOnInit(): Promise<void> {
    let s = Number(this._router.snapshot.paramMap.get("id"));
    this.Product = await this._service.GetProductById(s);
    this.Product.id = s;
    console.log(this.Product.id);
    this.images.push(this.Product.image);
   
    this.comment.productId = this.Product.id;
 
  }

  async SendComment(){
    this._service.SendComment(this.comment);

  }
  addData(type:CharacteristicType, ) {
    
    type.charastitics.push(new Charastitic());
    //this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
     
    //table.renderRows();
  }

   

  /// добавление товара в корзину
  public RemoveComment(comment:CommentEntity){
    
    this._service.RemoveComment(comment.commentId);
  }
  public LikeComment( comment:CommentEntity){
    this._service.LikeComment(comment.commentId)
  }
  open(content:any) {
    
      const modalRef = this.modalService.open(content).result.then(
        (result) => {
           
        },
        (reason) => {
           
        },
      );
    
	 
	 
	}

}
