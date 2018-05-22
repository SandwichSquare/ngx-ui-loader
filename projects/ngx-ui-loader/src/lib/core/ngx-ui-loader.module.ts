import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxUiLoaderService } from './ngx-ui-loader.service';
import { NgxUiLoaderHelperService } from './ngx-ui-loader-helper.service';
import { NgxUiLoaderComponent } from './ngx-ui-loader.component';
import { NGX_UI_LOADER_CONFIG_TOKEN } from './ngx-ui-loader-config.token';
import { NgxUiLoaderConfig } from './ngx-ui-loader-config';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NgxUiLoaderHelperService,
    NgxUiLoaderService,
  ],
  declarations: [NgxUiLoaderComponent],
  exports: [NgxUiLoaderComponent]
})
export class NgxUiLoaderModule {
  /**
   * forRoot
   * @param ngxUiLoaderConfig
   * @returns A module with its provider dependencies
   */
  static forRoot(ngxUiLoaderConfig: NgxUiLoaderConfig): ModuleWithProviders {
    return {
      ngModule: NgxUiLoaderModule,
      providers: [
        {
          provide: NGX_UI_LOADER_CONFIG_TOKEN,
          useValue: ngxUiLoaderConfig
        }
      ]
    };
  }
}