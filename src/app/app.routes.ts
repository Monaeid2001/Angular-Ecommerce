import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { productsComponent } from './products/products.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    {
        path:"",
        component:HomepageComponent,
    },
    {
        path:"homepage",
        component:HomepageComponent,
    },
    {
        path: 'products',
        component: productsComponent,
        title:'products'
    },
    {
        path: 'services',
        component:ServicesSectionComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path:"login",
        component:LoginComponent,
        title:"Login"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"Registeration"
    },
    {
        path:"productdetails/:id",
        component:ProductdetailsComponent,
        title:"product"
    },
    {
        path:"cartpage",
        component:CartpageComponent,
        title:"Cart"
    },
    {
        path:'**',
        component:NotFoundComponent,
    }

];
