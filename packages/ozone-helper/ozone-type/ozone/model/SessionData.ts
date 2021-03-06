/**
 * Ozone
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface SessionData {
    dirty?: boolean;

    created?: number;

    id?: string;

    contextPath?: string;

    lastNode?: string;

    lastSaved?: number;

    allAttributes?: { [key: string]: any; };

    vhost?: string;

    expiry?: number;

    cookieSet?: number;

    accessed?: number;

    lastAccessed?: number;

    maxInactiveMs?: number;

    keys?: Array<string>;

}
