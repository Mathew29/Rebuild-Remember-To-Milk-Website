import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterCompany } from '../models/footer-company.models';
import { FooterProduct } from '../models/footer-product.models';
import { FooterCommunity } from '../models/footer-community.models';
import { FooterSupport } from '../models/footer-support.models';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent {
@Input() childFooterCompany: FooterCompany[];
@Input() childFooterProduct: FooterProduct[];
@Input() childFooterCommunity: FooterCommunity[];
@Input() childFooterSupport: FooterSupport[];
@Output() clickFooter = new EventEmitter();

}
