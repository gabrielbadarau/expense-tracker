import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule],
})
export class IconRegistryModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'expense-tracker-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/expense-tracker-logo.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'close',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'beauty',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/beauty.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'clothing',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/clothing.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'entertainment',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/entertainment.svg')
    );
    this.matIconRegistry.addSvgIcon('food', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/food.svg'));
    this.matIconRegistry.addSvgIcon('gift', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/gift.svg'));
    this.matIconRegistry.addSvgIcon(
      'health',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/health.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'household',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/household.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'ordered-food',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ordered-food.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'other',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/other.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'self-development',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/self-development.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'social-life',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-life.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'transportation',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/transportation.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'all-expenses',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/all-expenses.svg')
    );
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('add', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
    this.matIconRegistry.addSvgIcon(
      'charts',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/charts.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg')
    );
  }
}
