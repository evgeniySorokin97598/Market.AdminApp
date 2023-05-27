import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Category } from './Logic/Entities/Category';
import { ProductsHelper } from './Logic/Helpers/ProductsHelper';
import { BaseService } from './Logic/Services/BaseService';
import { IdentetyService } from './Logic/Services/IdentetyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Market';
  Categories: Category[] = [];
  public category: Category = new Category();
  hiddenCategories = true;
  displayedColumns: string[] = ['position', ];
  public hiddenCountCart = true;

  constructor(private _service: BaseService,
    private router: Router,
    private offcanvasService: NgbOffcanvas,
    public productsHelper:ProductsHelper,
    private modalService: NgbModal,
    public _identetyService:IdentetyService){
    productsHelper.GetProducts(); /// что бы на фронте сразу кол-во товаров отображалось, а не после какого то заказа
     
  }
  async ngOnInit(): Promise<void>{
    await this._service.Init();
    let categories =  await this._service.GetHomePageData();
    console.log(categories);
    this.Categories = categories;
    
  }

  ShowCategory(name:string){
    
    console.log(name);
    this.router.navigate(['/Subcategories/'+ name]);
  }
  openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
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
