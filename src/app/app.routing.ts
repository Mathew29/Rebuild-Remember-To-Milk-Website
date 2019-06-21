import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { TourComponent } from './tour/tour.component';

const appRoutes: Routes = [
    {
        path: '',
        component:  MainHeaderComponent
    },
    {
        path: 'tour',
        component: TourComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);