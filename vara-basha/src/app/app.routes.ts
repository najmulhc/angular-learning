import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Addhome } from './pages/addhome/addhome';
import { Posts } from './pages/posts/posts';

export const routes: Routes = [
    {
        path: "", 
        component: Homepage, 
        title: "Home Page | Home of the best houses"
    } , 
    {
        path: "add", 
        component: Addhome,
        title: "Add Home | Add a new house listing"
    }, 
    {
        path:"posts", 
        title: "Posts | The posts I get from the API",
        component: Posts
    }
];
