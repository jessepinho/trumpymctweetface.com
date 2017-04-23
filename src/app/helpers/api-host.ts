import { OpaqueToken } from '@angular/core';
import { environment } from '../../environments/environment';

export const APIHost = new OpaqueToken('APIHost');
export const APIHostProvider = { provide: APIHost, useValue: environment.apiHost };
