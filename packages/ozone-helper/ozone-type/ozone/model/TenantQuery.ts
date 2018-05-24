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

export interface TenantQuery extends models.Query {
    mode: ModeType;
    tenantId: string;

}
export type ModeType = 'OWN' | 'OWN_AND_CHILDREN' | 'OWN_AND_PARENTS' | 'OWN_AND_PARENT_AND_CHILDREN' | 'CHILDREN' | 'PARENTS' | 'PARENTS_AND_CHILDREN'