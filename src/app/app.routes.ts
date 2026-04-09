import { Routes } from '@angular/router';
import { AttDir } from './Component/att-dir/att-dir';
import { DataBinding } from './Component/data-binding/data-binding';
import { GetAPI } from './Component/get-api/get-api';
import { Signal } from './Component/signal/signal';
import { User } from './Component/user/user';
import { GetPost } from './Component/get-post/get-post';
import { Ngif } from './Component/ng-if/ng-if';
import { Hooks } from './Component/hooks/hooks';
import { Category } from './Component/category/category';
import { Department } from './Component/department/department';
import { ViewChildEx } from './Component/view-child-ex/view-child-ex';
import { ForLoop } from './Component/for-loop/for-loop';
import { NotFound } from './Component/not-found/not-found';
import { Alert } from './Reusable/alert/alert';
import { Tabs } from './Reusable/tabs/tabs';
import { ProgressBar } from './Reusable/progress-bar/progress-bar';


export const routes: Routes = [

    {
        path:'',
        redirectTo: 'data-binding',
        pathMatch: 'full'
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'get-API',
        component: GetAPI
    },
    {
        path: 'attDir',
        component: AttDir
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'get-post',
        component: GetPost
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'ngif',
        component: Ngif
    },
    {
        path: 'ngFor',
        component: ForLoop
    },
    {
        path: 'category',
        component: Category
    },
    {
        path: 'hooks',
        component: Hooks
    },
    {
        path: 'dept',
        component: Department
    },
    {
        path: 'viewchildex',
        component: ViewChildEx
    },
    {
        path: '**',
        component: NotFound
    }
];


