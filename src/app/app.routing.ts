import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { TourComponent } from './tour/tour.component';
import { NewComponent } from './new/new.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HelpComponent } from './help/help.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
    {
        path: '',
        component:  MainHeaderComponent
    },
    {
        path: 'tour',
        component: TourComponent
    },
    {
        path: 'new',
        component: NewComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: 'log-in',
        component: LogInComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);