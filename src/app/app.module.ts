import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientHelper } from './Logic/Helpers/HttpClientHelper';
import { BaseService } from './Logic/Services/BaseService';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { LocalStorageService } from './Logic/Services/LocalStorageService';
import { ProductsHelper } from './Logic/Helpers/ProductsHelper';
 
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfigurationService } from './Logic/Services/ConfigService';
import {MatCardModule} from '@angular/material/card';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {  ReactiveFormsModule} from '@angular/forms';
import { IdentetyService } from './Logic/Services/IdentetyService';
import { CategoryListComponentComponent } from './Components/category-list-component/category-list-component.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import {TooltipPosition} from '@angular/material/tooltip';
//import {MatButtonModule} from '@angular/material/button';
import {CdkScrollable} from '@angular/cdk/scrolling';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
//import {MatFormFieldModule} from '@angular/material/form-field';
 
import {MatTable} from '@angular/material/table';
 
const routes: Routes = [
  {path: 'Subcategories/:categoryName',component:CategoryListComponentComponent},
  {path: 'Products/:SubCategoryName', component:ProductsListComponent},
  {path: 'Product/:id', component:ProductPageComponent},
  {path: 'EditProduct/:id', component:EditProductComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductPageComponent,
    CategoryListComponentComponent,
    EditProductComponent
  ],
  imports: [
    MatSelectModule,
     
    NgFor,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,     
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatBadgeModule,
    MatDatepickerModule,
  
    MatSnackBarModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
 
    BrowserAnimationsModule,
    FormsModule,

    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfigurationService,
     
    HttpClientHelper,
    BaseService,
    LocalStorageService,
    ProductsHelper,
    IdentetyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
