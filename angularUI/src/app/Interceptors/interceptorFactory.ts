import { Injector } from '@angular/core';
import { RequestinterceptorService } from './requestinterceptor.service';

export function interceptorFactory(injector: Injector) {
    return new RequestinterceptorService(injector);
}