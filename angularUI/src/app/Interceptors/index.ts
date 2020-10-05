import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestinterceptorService } from './requestinterceptor.service';
import { interceptorFactory } from './interceptorFactory';
import { Injector } from '@angular/core';

export const httpIntercetptorProvider = [
    {provide : HTTP_INTERCEPTORS, 
      useClass :RequestinterceptorService,
      useFactory: interceptorFactory,
      deps: [Injector],
       multi : true}
  ];