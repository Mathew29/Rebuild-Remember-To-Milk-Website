import { Component } from '@angular/core';
import { MainHeader } from './models/main-header.model';
import { FooterCompany } from './models/footer-company.models';
import { FooterProduct } from './models/footer-product.models';
import { FooterCommunity } from './models/footer-community.models';
import { FooterSupport } from './models/footer-support.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remember the milk';
  header = true;
  footer = true;
  masterMainHeader: MainHeader[] = [
    new MainHeader('The smart to-do app for busy people.')
  ];
  masterFooterCompany: FooterCompany[] = [
    new FooterCompany('About'),
    new FooterCompany('Jobs'),
    new FooterCompany('Press'),
    new FooterCompany('Blog')
  ]
  masterFooterProduct: FooterProduct[] = [
    new FooterProduct('Tour'),
    new FooterProduct("What's New"),
    new FooterProduct('Download Apps'),
    new FooterProduct('Integrations'),
    new FooterProduct('Upgrade')
  ]
  masterFooterCommunity: FooterCommunity[] = [
    new FooterCommunity('Forums'),
    new FooterCommunity('Tester Program'),
    new FooterCommunity('The Dairy'),
    new FooterCommunity('Translations'),
    new FooterCommunity('API')
  ]
  masterFooterSupport: FooterSupport[] = [
    new FooterSupport('Help Center'),
    new FooterSupport('Get Started'),
    new FooterSupport('Tips & Tricks'),
    new FooterSupport('Status'),
    new FooterSupport('Contact Us')
  ]
    
    

  
}
