import { Observable } from 'rxjs';
import { ITdHttpInterceptor } from '@covalent/http';
export declare class VantageAuthenticationInterceptor implements ITdHttpInterceptor {
    onResponseError(error: any): any;
    handleResponse(observable: Observable<any>): Observable<any>;
}
