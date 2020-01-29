import { Optional, SkipSelf, NgModule, Injectable, Inject, RendererFactory2, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { __decorate, __param, __metadata, __awaiter } from 'tslib';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { map, catchError, switchMap, timeout, retry, filter } from 'rxjs/operators';
import { TdGET, TdQueryParams, TdResponse, TdPOST, TdBody, TdParam, TdHttp, TdPUT, TdDELETE, TdPATCH } from '@covalent/http';
import { TdDialogService, CovalentDialogsModule } from '@covalent/core/dialogs';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TdMediaService, CovalentMediaModule } from '@covalent/core/media';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IAuditLog() { }
if (false) {
    /** @type {?|undefined} */
    IAuditLog.prototype.action;
    /** @type {?|undefined} */
    IAuditLog.prototype.component;
    /** @type {?|undefined} */
    IAuditLog.prototype.correlation_id;
    /** @type {?|undefined} */
    IAuditLog.prototype.details;
    /** @type {?|undefined} */
    IAuditLog.prototype.id;
    /** @type {?|undefined} */
    IAuditLog.prototype.logtime;
    /** @type {?|undefined} */
    IAuditLog.prototype.message;
    /** @type {?|undefined} */
    IAuditLog.prototype.result;
    /** @type {?|undefined} */
    IAuditLog.prototype.username;
}
let VantageAuditService = class VantageAuditService {
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    query(params, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    get(id, response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    health(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return !!res;
        })));
    }
};
__decorate([
    TdGET({
        path: '/audit/messages',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdQueryParams()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HttpParams,
        Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "query", null);
__decorate([
    TdPOST({
        path: '/audit/messages',
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "create", null);
__decorate([
    TdGET({
        path: '/audit/messages/:id',
    }),
    __param(0, TdParam('id')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "get", null);
__decorate([
    TdGET({
        path: '/health',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "health", null);
VantageAuditService = __decorate([
    TdHttp({
        baseUrl: '/api/audit',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageAuditService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_AUDIT_PROVIDER_FACTORY(parent) {
    return parent || new VantageAuditService();
}
/** @type {?} */
const VANTAGE_AUDIT_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAuditService,
    deps: [[new Optional(), new SkipSelf(), VantageAuditService]],
    useFactory: VANTAGE_AUDIT_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAuditModule {
}
VantageAuditModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_AUDIT_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISMTPConfig() { }
if (false) {
    /** @type {?|undefined} */
    ISMTPConfig.prototype.server;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.port;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.reply_address;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.smtp_username;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.smtp_password;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.use_ssl;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.anon_logon;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.server_timeout;
}
let VantageSMTPService = class VantageSMTPService {
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    query(response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    delete(response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    health(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return !!res;
        })));
    }
};
__decorate([
    TdPUT({
        path: '/smtp-config',
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSMTPService.prototype, "create", null);
__decorate([
    TdGET({
        path: '/smtp-config',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageSMTPService.prototype, "query", null);
__decorate([
    TdDELETE({
        path: '/smtp-config',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageSMTPService.prototype, "delete", null);
__decorate([
    TdGET({
        path: '/health',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageSMTPService.prototype, "health", null);
VantageSMTPService = __decorate([
    TdHttp({
        baseUrl: '/api/notification',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageSMTPService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_SMTP_PROVIDER_FACTORY(parent) {
    return parent || new VantageSMTPService();
}
/** @type {?} */
const VANTAGE_SMTP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSMTPService,
    deps: [[new Optional(), new SkipSelf(), VantageSMTPService]],
    useFactory: VANTAGE_SMTP_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageNotificationModule {
}
VantageNotificationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_SMTP_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SystemType = {
    Teradata: 'TERADATA',
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
/** @type {?} */
const VANTAGE_SYSTEMS_TYPES = [SystemType.Teradata, SystemType.Aster, SystemType.Presto];
/**
 * @record
 */
function ISystemAttributes() { }
if (false) {
    /** @type {?|undefined} */
    ISystemAttributes.prototype.attributes;
}
/**
 * @record
 */
function IAbstractSystem() { }
if (false) {
    /** @type {?|undefined} */
    IAbstractSystem.prototype.host;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.port;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.system_type;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.catalog;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.schema;
}
/**
 * @record
 */
function ISystem() { }
if (false) {
    /** @type {?|undefined} */
    ISystem.prototype.attributes;
    /** @type {?|undefined} */
    ISystem.prototype.data_center;
    /** @type {?|undefined} */
    ISystem.prototype.environment;
    /** @type {?|undefined} */
    ISystem.prototype.id;
    /** @type {?|undefined} */
    ISystem.prototype.nickname;
    /** @type {?|undefined} */
    ISystem.prototype.platform_id;
    /** @type {?|undefined} */
    ISystem.prototype.system_attributes;
    /** @type {?|undefined} */
    ISystem.prototype.version;
}
/**
 * @record
 */
function ITestSystem() { }
if (false) {
    /** @type {?|undefined} */
    ITestSystem.prototype.account;
    /** @type {?|undefined} */
    ITestSystem.prototype.default_char_set;
    /** @type {?|undefined} */
    ITestSystem.prototype.default_database;
    /** @type {?|undefined} */
    ITestSystem.prototype.log_mech;
    /** @type {?|undefined} */
    ITestSystem.prototype.password;
    /** @type {?|undefined} */
    ITestSystem.prototype.username;
}
let VantageSystemService = class VantageSystemService {
    /**
     * @param {?=} response
     * @return {?}
     */
    health(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return !!res;
        })));
    }
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    query(params, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    get(id, response) {
        return response;
    }
    /**
     * @param {?} system
     * @param {?=} response
     * @return {?}
     */
    create(system, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?} system
     * @param {?=} response
     * @return {?}
     */
    update(id, system, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    delete(id, response) {
        return response;
    }
    /**
     * @param {?} system
     * @param {?=} response
     * @return {?}
     */
    test(system, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return true;
        })));
    }
};
__decorate([
    TdGET({
        path: '/health',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "health", null);
__decorate([
    TdGET({
        path: '/systems',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdQueryParams()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HttpParams,
        Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "query", null);
__decorate([
    TdGET({
        path: '/systems/:id',
    }),
    __param(0, TdParam('id')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "get", null);
__decorate([
    TdPOST({
        path: '/systems',
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "create", null);
__decorate([
    TdPUT({
        path: '/systems/:id',
    }),
    __param(0, TdParam('id')),
    __param(1, TdBody()),
    __param(2, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "update", null);
__decorate([
    TdDELETE({
        path: '/systems/:id',
    }),
    __param(0, TdParam('id')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "delete", null);
__decorate([
    TdPOST({
        path: '/testsystem',
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "test", null);
VantageSystemService = __decorate([
    TdHttp({
        baseUrl: '/api/system',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageSystemService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_SYSTEM_PROVIDER_FACTORY(parent) {
    return parent || new VantageSystemService();
}
/** @type {?} */
const VANTAGE_SYSTEM_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSystemService,
    deps: [[new Optional(), new SkipSelf(), VantageSystemService]],
    useFactory: VANTAGE_SYSTEM_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageSystemModule {
}
VantageSystemModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_SYSTEM_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const LDAPEncription = {
    None: 'NONE',
};
/**
 * @record
 */
function ILDAPConfig() { }
if (false) {
    /** @type {?|undefined} */
    ILDAPConfig.prototype.allowed_groups;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.base_dn;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.config_id;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.connectionUrl;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.email_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.encryption;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.group_id_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.groups_base_dn;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.id_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.member_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.member_of_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.name_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.port;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.search_pass;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.search_user;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.server;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.url;
}
let VantageLDAPService = class VantageLDAPService {
    /**
     * @param {?=} response
     * @return {?}
     */
    query(response) {
        return response;
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    update(id, body, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    delete(id, response) {
        return response;
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    test(body, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res.status === 200;
        })));
    }
};
__decorate([
    TdGET({
        path: '/',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "query", null);
__decorate([
    TdPOST({
        path: '/',
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "create", null);
__decorate([
    TdPATCH({
        path: '/:id',
    }),
    __param(0, TdParam('id')),
    __param(1, TdBody()),
    __param(2, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "update", null);
__decorate([
    TdDELETE({
        path: '/:id',
    }),
    __param(0, TdParam('id')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "delete", null);
__decorate([
    TdPOST({
        path: '/verify',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "test", null);
VantageLDAPService = __decorate([
    TdHttp({
        baseUrl: '/api/user/ldap/config',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageLDAPService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_LDAP_PROVIDER_FACTORY(parent) {
    return parent || new VantageLDAPService();
}
/** @type {?} */
const VANTAGE_LDAP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageLDAPService,
    deps: [[new Optional(), new SkipSelf(), VantageLDAPService]],
    useFactory: VANTAGE_LDAP_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IUser() { }
if (false) {
    /** @type {?|undefined} */
    IUser.prototype.username;
    /** @type {?|undefined} */
    IUser.prototype.password;
    /** @type {?|undefined} */
    IUser.prototype.email;
    /** @type {?|undefined} */
    IUser.prototype.local;
    /** @type {?|undefined} */
    IUser.prototype.admin;
    /** @type {?|undefined} */
    IUser.prototype.groups;
    /** @type {?|undefined} */
    IUser.prototype.display_name;
    /** @type {?|undefined} */
    IUser.prototype.access_token;
    /** @type {?|undefined} */
    IUser.prototype.expires_at;
}
let VantageUserService = class VantageUserService {
    /**
     * get all users
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    query(queryParams, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    }
    /**
     * gets a single users information
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    get(id, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res.body;
        })));
    }
};
__decorate([
    TdGET({
        path: '/users',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdQueryParams()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HttpParams,
        Observable]),
    __metadata("design:returntype", Observable)
], VantageUserService.prototype, "query", null);
__decorate([
    TdGET({
        path: '/users/:username',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdParam('username')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Observable]),
    __metadata("design:returntype", Observable)
], VantageUserService.prototype, "get", null);
VantageUserService = __decorate([
    TdHttp({
        baseUrl: '/api/user',
        baseHeaders: new HttpHeaders({
            Accept: 'application/json',
        }),
    })
], VantageUserService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_USER_PROVIDER_FACTORY(parent) {
    return parent || new VantageUserService();
}
/** @type {?} */
const VANTAGE_USER_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageUserService,
    deps: [[new Optional(), new SkipSelf(), VantageUserService]],
    useFactory: VANTAGE_USER_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IGroup() { }
if (false) {
    /** @type {?|undefined} */
    IGroup.prototype.name;
    /** @type {?|undefined} */
    IGroup.prototype.description;
    /** @type {?|undefined} */
    IGroup.prototype.id;
    /** @type {?|undefined} */
    IGroup.prototype.display_name;
    /** @type {?|undefined} */
    IGroup.prototype.users;
}
let VantageGroupService = class VantageGroupService {
    /**
     * get groups in paginated form via query string
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    query(queryParams, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    }
};
__decorate([
    TdGET({
        path: '/groups',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdQueryParams()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HttpParams,
        Observable]),
    __metadata("design:returntype", Observable)
], VantageGroupService.prototype, "query", null);
VantageGroupService = __decorate([
    TdHttp({
        baseUrl: '/api/user',
        baseHeaders: new HttpHeaders({
            Accept: 'application/json',
        }),
    })
], VantageGroupService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_GROUP_PROVIDER_FACTORY(parent) {
    return parent || new VantageGroupService();
}
/** @type {?} */
const VANTAGE_GROUP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageGroupService,
    deps: [[new Optional(), new SkipSelf(), VantageGroupService]],
    useFactory: VANTAGE_GROUP_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageUserModule {
}
VantageUserModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_LDAP_PROVIDER, VANTAGE_USER_PROVIDER, VANTAGE_GROUP_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SystemType$1 = {
    Teradata: 'TERADATA',
    // TODO: remove the following 2
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
/**
 * @record
 */
function ISystemAttributes$1() { }
if (false) {
    /** @type {?|undefined} */
    ISystemAttributes$1.prototype.attributes;
}
/**
 * @record
 */
function IAbstractSystem$1() { }
if (false) {
    /** @type {?|undefined} */
    IAbstractSystem$1.prototype.host;
    /** @type {?|undefined} */
    IAbstractSystem$1.prototype.port;
    /** @type {?|undefined} */
    IAbstractSystem$1.prototype.system_type;
    /** @type {?|undefined} */
    IAbstractSystem$1.prototype.catalog;
    /** @type {?|undefined} */
    IAbstractSystem$1.prototype.schema;
}
/**
 * @record
 */
function ISystem$1() { }
if (false) {
    /** @type {?|undefined} */
    ISystem$1.prototype.attributes;
    /** @type {?|undefined} */
    ISystem$1.prototype.data_center;
    /** @type {?|undefined} */
    ISystem$1.prototype.environment;
    /** @type {?|undefined} */
    ISystem$1.prototype.id;
    /** @type {?|undefined} */
    ISystem$1.prototype.nickname;
    /** @type {?|undefined} */
    ISystem$1.prototype.platform_id;
    /** @type {?|undefined} */
    ISystem$1.prototype.system_attributes;
    /** @type {?|undefined} */
    ISystem$1.prototype.version;
}
/**
 * @record
 */
function IQueryPayload() { }
if (false) {
    /** @type {?} */
    IQueryPayload.prototype.query;
    /** @type {?|undefined} */
    IQueryPayload.prototype.session;
    /** @type {?|undefined} */
    IQueryPayload.prototype.logMech;
    /** @type {?|undefined} */
    IQueryPayload.prototype.rowOffset;
    /** @type {?|undefined} */
    IQueryPayload.prototype.rowLimit;
    /** @type {?|undefined} */
    IQueryPayload.prototype.format;
    /** @type {?|undefined} */
    IQueryPayload.prototype.includeColumns;
    /** @type {?|undefined} */
    IQueryPayload.prototype.includeColumnsTypes;
    /** @type {?|undefined} */
    IQueryPayload.prototype.spooledResultSet;
    /** @type {?|undefined} */
    IQueryPayload.prototype.clientId;
}
/**
 * @record
 */
function IQueryResultSet() { }
if (false) {
    /** @type {?} */
    IQueryResultSet.prototype.queueDuration;
    /** @type {?} */
    IQueryResultSet.prototype.queryDuration;
    /** @type {?} */
    IQueryResultSet.prototype.results;
}
/**
 * @record
 */
function IQueryResultSetResult() { }
if (false) {
    /** @type {?} */
    IQueryResultSetResult.prototype.data;
    /** @type {?} */
    IQueryResultSetResult.prototype.resultSet;
    /** @type {?} */
    IQueryResultSetResult.prototype.rowCount;
    /** @type {?} */
    IQueryResultSetResult.prototype.rowLimitExceeded;
    /** @type {?|undefined} */
    IQueryResultSetResult.prototype.columns;
}
/**
 * @record
 */
function IQueryInfo() { }
if (false) {
    /** @type {?|undefined} */
    IQueryInfo.prototype.success;
    /** @type {?|undefined} */
    IQueryInfo.prototype.logTime;
    /** @type {?|undefined} */
    IQueryInfo.prototype.error;
    /** @type {?|undefined} */
    IQueryInfo.prototype.resultSet;
}
/**
 * @record
 */
function ISQLEConnection() { }
if (false) {
    /** @type {?} */
    ISQLEConnection.prototype.system;
    /** @type {?|undefined} */
    ISQLEConnection.prototype.creds;
}
class VantageQueryService {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * @param {?} connection
     * @param {?} payload
     * @return {?}
     */
    querySystem(connection, payload) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            payload.logMech = connection.system.system_attributes.attributes.log_mech || 'DEFAULT';
        }
        else {
            payload.logMech = 'JWT';
        }
        payload.clientId = 'VANTAGE.EDITOR';
        /** @type {?} */
        const request = this._httpClient.post('/api/query/tdrest/systems/' + connection.system.nickname + '/queries', payload, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} tableName
     * @return {?}
     */
    getTableInfo(connection, databaseName, tableName) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get(`/api/query/systems/${connection.system.nickname}/databases/${databaseName}/tables/${tableName}`, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} viewName
     * @return {?}
     */
    getViewInfo(connection, databaseName, viewName) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get(`/api/query/systems/${connection.system.nickname}/databases/${databaseName}/views/${viewName}`, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} requestId
     * @return {?}
     */
    getQuery(connection, requestId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + requestId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    getQueries(connection, sessionId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries?session=' + sessionId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    getQueryResult(connection, queryId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId + '/results', { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    deleteQuery(connection, queryId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    createSession(connection) {
        /** @type {?} */
        const payload = {
            autoCommit: 'true',
            transactionMode: 'TERA',
            charSet: 'UTF8',
        };
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            payload.logMech = connection.system.system_attributes.attributes.log_mech || 'DEFAULT';
        }
        else {
            payload.logMech = 'JWT';
        }
        /** @type {?} */
        const request = this._httpClient.post('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions', payload, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    deleteSession(connection, sessionId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions/' + sessionId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
}
VantageQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageQueryService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageQueryService.prototype._httpClient;
}
/**
 * @param {?} parent
 * @param {?} httpClient
 * @return {?}
 */
function VANTAGE_QUERY_PROVIDER_FACTORY(parent, httpClient) {
    return parent || new VantageQueryService(httpClient);
}
/** @type {?} */
const VANTAGE_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageQueryService,
    deps: [[new Optional(), new SkipSelf(), VantageQueryService], HttpClient],
    useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sysDatabases = [
    'DBC',
    'dbcmngr',
    'SQLJ',
    'SystemFe',
    'SysAdmin',
    'SYSBAR',
    'SYSJDBC',
    'SYSLIB',
    'SYSUDTLIB',
    'TDMaps',
    'TD_SERVER_DB',
    'TD_SYSFNLIB',
    'TD_SYSXML',
    'Sys_Calendar',
];
/**
 * @record
 */
function IDictionarySystem() { }
if (false) {
    /** @type {?|undefined} */
    IDictionarySystem.prototype.hostname;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.password;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.port;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.system_id;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.last_run;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.interval_minutes;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.enabled;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.last_attempt;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.in_collection;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.username;
}
/**
 * @record
 */
function IDictionaryDatabase() { }
if (false) {
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.parent_name;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.size_bytes;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.system_id;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.name;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.id;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.type;
}
/**
 * @record
 */
function IDictionaryDatabaseObject() { }
if (false) {
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.system_id;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.database_id;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.id;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.name;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.size_bytes;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.type;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.create_text;
}
/**
 * @record
 */
function IDictionaryTableColumn() { }
if (false) {
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.system_id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.database_id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.table_id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.name;
}
/**
 * FunctionType
 * A - Aggregate
 * B - Aggregate and statistical
 * C - Contract function
 * D - External stored procedure
 * F - Scalar
 * H - User defined method
 * I - Internal type method
 * L - Table operator
 * R - Table Function
 * S - Statistical
 */
/**
 * TableKind for dbc.tablesvx;
 * A - Aggregate function
 * B - Combined aggregate and ordered analytical function
 * C - Table operator parser contract function
 * D - JAR
 * E - External Stored Procedure
 * F - Standard Function
 * G - Trigger
 * H - Instance or contructor method
 * I - Join Index
 * J - Journal
 * K - Foreign Server Object
 * L - User defined table operator
 * M - Macro
 * N - Hash index
 * O - Table with no primary index and no partitioning
 * P - Stored Procedure
 * Q - Queue table
 * R - Table function
 * S - Ordered Analytical function
 * T - table with a primary index or primary AMP index, partitioning or both. Or a partioned table with NoPI;
 * U - User defined type
 * V - View
 * X - Authorization
 * Y - GLOP set
 * Z - UIF - User Installed File
 * 1 - A DATASET schema object created by CREATE SCHEMA
 * 2 - Functon alias object
 */
/**
 * dbc.externalSPs
 * dbc.sessionInfovx
 */
class VantageDictionaryService {
    /**
     * @param {?} _queryService
     */
    constructor(_queryService) {
        this._queryService = _queryService;
    }
    /**
     * @param {?} connection
     * @param {?} database
     * @param {?} view
     * @return {?}
     */
    getViewHelp(connection, database, view) {
        /** @type {?} */
        const queryStr = `
      LOCK ROW FOR ACCESS
      SELECT CAST(COUNT(*) AS BIGINT) as cnt
      FROM ${database}.${view};
      SHOW VIEW ${database}.${view};
    `;
        return this._queryService.getViewInfo(connection, database, view).pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.columns.map((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return {
                    comment: column.remarks,
                    type: 'column',
                    columnType: column.type,
                    name: column.name,
                    database: resultSet.database,
                    table: resultSet.name,
                };
            }));
        })), switchMap((/**
         * @param {?} viewInfo
         * @return {?}
         */
        (viewInfo) => {
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                /** @type {?} */
                let ddlStatement = '';
                resultSet.results[1].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    ddlStatement += row['Request Text'];
                }));
                /** @type {?} */
                let count;
                resultSet.results[0].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    count = row.cnt;
                }));
                /** @type {?} */
                const columns = viewInfo.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    return {
                        columnName: row.name,
                        type: row.columnType,
                    };
                }));
                return {
                    database,
                    view,
                    columns,
                    count,
                    ddlStatement,
                };
            })));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} database
     * @param {?} table
     * @return {?}
     */
    getTableHelp(connection, database, table) {
        /** @type {?} */
        const queryStr = `
      LOCK ROW FOR ACCESS
      SELECT CAST(COUNT(*) AS BIGINT) as cnt
      FROM ${database}.${table};
      SHOW TABLE ${database}.${table};
    `;
        return this._queryService.getTableInfo(connection, database, table).pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.columns.map((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return {
                    comment: column.remarks,
                    type: 'column',
                    columnType: column.type,
                    name: column.name,
                    database: resultSet.database,
                    table: resultSet.name,
                };
            }));
        })), switchMap((/**
         * @param {?} info
         * @return {?}
         */
        (info) => {
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                /** @type {?} */
                let ddlStatement = '';
                resultSet.results[1].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    ddlStatement += row['Request Text'];
                }));
                /** @type {?} */
                let count;
                resultSet.results[0].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    count = row.cnt;
                }));
                /** @type {?} */
                const columns = info.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    return {
                        columnName: row.name,
                        type: row.columnType,
                    };
                }));
                return {
                    database,
                    table,
                    columns,
                    count,
                    ddlStatement,
                };
            })));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} funcName
     * @return {?}
     */
    getDatabaseFunction(connection, funcName) {
        /** @type {?} */
        const queryStr = `
      HELP 'SQL ${funcName}';
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            /** @type {?} */
            const stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return row['On-Line Help'];
            }));
            return stringArray.join(' ');
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getDatabaseFunctions(connection) {
        /** @type {?} */
        const queryStr = `
      HELP 'SQL';
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            /** @type {?} */
            const stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return row['On-Line Help'];
            }));
            /** @type {?} */
            let sqlHelp = stringArray.join(' ');
            /** @type {?} */
            const index = sqlHelp.indexOf('FUNCTIONS') + 12;
            sqlHelp = sqlHelp.substr(index, sqlHelp.length);
            return sqlHelp
                .split(' ')
                .filter((/**
             * @param {?} func
             * @return {?}
             */
            (func) => {
                return func;
            }))
                .map((/**
             * @param {?} func
             * @return {?}
             */
            (func) => {
                return {
                    name: func,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getAnalyticalFunctions(connection) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN SCHEMA "public"@coprocessor;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.objectname,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} analyticalFunction
     * @return {?}
     */
    getAnalyticalFunction(connection, analyticalFunction) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN FUNCTION "public"."${analyticalFunction}"@coprocessor;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            /** @type {?} */
            let functionName = '';
            /** @type {?} */
            let shortDescription = '';
            /** @type {?} */
            let longDescription = '';
            /** @type {?} */
            let usageSyntax = '';
            /** @type {?} */
            let inputColumns = '';
            /** @type {?} */
            let outputColumns = '';
            /** @type {?} */
            const functionOwner = '';
            /** @type {?} */
            const creationTime = '';
            /** @type {?} */
            const functionVersion = '';
            /** @type {?} */
            const interfacesImplemented = '';
            /** @type {?} */
            const stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return row['Function Help'];
            }));
            for (let index = 0; index < stringArray.length; index++) {
                /** @type {?} */
                const value = stringArray[index];
                if (value.indexOf('Function Name:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        functionName += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Short Description:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        shortDescription += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Long Description:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        longDescription += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Usage Syntax:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        usageSyntax += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Input Columns:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        inputColumns += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Output Columns:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        outputColumns += stringArray[index] + '\n';
                    }
                }
                else {
                    // Function Owner:
                    // Creation Time:
                    // Function Version:
                    // Interfaces Implemented:
                    if (stringArray.indexOf('') > -1) {
                        index = stringArray.indexOf('');
                        stringArray[index] = undefined;
                    }
                }
            }
            return {
                functionName,
                shortDescription,
                longDescription,
                usageSyntax,
                inputColumns,
                outputColumns,
            };
        })));
    }
    /**
     * @param {?} resultSet
     * @return {?}
     */
    resultSetPredicate(resultSet) {
        return resultSet.results[0].data.map((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            return {
                name: row.TableName,
                requestText: row.RequestText,
                comment: row.CommentString,
                kind: row.TableKind,
            };
        }));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getStoredProcedures(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx
      WHERE TableKind = 'P'
      ORDER BY TableName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getExternalStoredProcedures(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx
      WHERE TableKind = 'E'
      ORDER BY TableName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getMacros(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx
      WHERE TableKind = 'M'
      ORDER BY TableName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    }
    /**
     * @param {?} resultSet
     * @return {?}
     */
    functionsvxPredicate(resultSet) {
        return resultSet.results[0].data.map((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            return {
                database: row.DatabaseName,
                name: row.SpecificName,
                paramNumber: row.NumParameters,
                paramDataTypes: row.ParameterDataTypes,
                requestText: row.RequestText,
                commentString: row.CommentString,
                kind: row.TableKind,
            };
        }));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getTableOperators(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,
      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind
      FROM dbc.functionsvx as func
      INNER JOIN dbc.tablesvx as tbl
      ON tbl.TableName = func.SpecificName
      AND tbl.DataBaseName = func.DatabaseName
      WHERE FunctionType = 'L'
      ORDER BY func.FunctionName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.functionsvxPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getTableFunctions(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,
      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind
      FROM dbc.functionsvx as func
      INNER JOIN dbc.tablesvx as tbl
      ON tbl.TableName = func.SpecificName
      AND tbl.DataBaseName = func.DatabaseName
      WHERE FunctionType = 'R'
      ORDER BY func.FunctionName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.functionsvxPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getForeignServers(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT TableName, TableKind FROM DBC.TABLESVX
      WHERE DATABASENAME = 'TD_SERVER_DB' AND
      TABLEKIND = 'K' AND
      TableName <> 'coprocesor';
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.TableName,
                    kind: row.TableKind,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @return {?}
     */
    getForeignSchemas(connection, foreignServer) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN SERVER ${foreignServer};
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.Schema,
                    kind: 'NONE',
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @return {?}
     */
    getForeignTables(connection, foreignServer, schema) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN DATABASE "${schema}"@${foreignServer};
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.Table,
                    kind: 'NONE',
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @param {?} table
     * @return {?}
     */
    getForeignColumns(connection, foreignServer, schema, table) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN TABLE "${schema}"."${table}"@${foreignServer};
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.Column,
                    type: row.Type,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getDatabases(connection) {
        /** @type {?} */
        const queryStr = 'SELECT databasename, PermSpace, SpoolSpace, TempSpace, CommentString, DBKind FROM dbc.databasesVX ORDER BY databasename;';
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.DatabaseName || row.schemaname,
                    type: row.DBKind === 'U' ? 'user' : 'database',
                    permSpace: row.PermSpace,
                    spoolSpace: row.SpoolSpace,
                    tempSpace: row.TempSpace,
                    comment: row.CommentString,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} databaseId
     * @return {?}
     */
    getDatabaseObjects(connection, databaseId) {
        /** @type {?} */
        const queryStr = `SELECT DataBaseName, TableName, TableKind, CommentString FROM dbc.tablesvx
       WHERE TableKind in ('T', 'O', 'V') AND DataBaseName = '${databaseId}' ORDER BY TableName ASC;`;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                /** @type {?} */
                const type = row.TableKind || row.tablekind;
                return {
                    kind: row.TableKind || row.tablekind,
                    type: type === 'V' ? 'view' : 'table',
                    name: row.TableName || row.tablename,
                    database: row.DataBaseName || row.databasename,
                    comment: row.CommentString,
                };
            }));
        })));
    }
    /**
     * @param {?} type
     * @param {?} connection
     * @param {?} databaseId
     * @param {?} tableId
     * @return {?}
     */
    getTableColumns(type, connection, databaseId, tableId) {
        if (type === 'table') {
            return this._queryService.getTableInfo(connection, databaseId, tableId).pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return {
                        comment: column.remarks,
                        type: 'column',
                        columnType: column.type,
                        name: column.name,
                        database: resultSet.database,
                        table: resultSet.name,
                    };
                }));
            })));
        }
        else if (type === 'view') {
            return this._queryService.getViewInfo(connection, databaseId, tableId).pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return {
                        comment: column.remarks,
                        type: 'column',
                        columnType: column.type,
                        name: column.name,
                        database: resultSet.database,
                        table: resultSet.name,
                    };
                }));
            })));
        }
    }
    /**
     * @param {?} connection
     * @param {?} searchStr
     * @param {?=} options
     * @return {?}
     */
    search(connection, searchStr, options = {
        databases: true,
        objects: true,
        columns: true,
    }) {
        /** @type {?} */
        const queries = [];
        if (options.databases) {
            /** @type {?} */
            const dbQuery = `
        SELECT
            DatabaseName as objectName,
            'database' as objectType,
            DBKind as kind,
            CommentString
        FROM dbc.databasesvx
        WHERE DatabaseName LIKE '%${searchStr}%'
        AND DataBaseName NOT IN ('${sysDatabases.join("', '")}')
      `;
            queries.push(dbQuery);
        }
        if (options.objects) {
            /** @type {?} */
            const objectQuery = `
        SELECT
            DataBaseName || '~|~' || TableName as objectName,
            'object' as objectType,
            TableKind as kind,
            CommentString
        FROM dbc.tablesvx
        WHERE TableKind in ('T', 'O', 'V')
        AND TableName LIKE '%${searchStr}%'
        AND DataBaseName NOT IN ('${sysDatabases.join("', '")}')
      `;
            queries.push(objectQuery);
        }
        if (options.objects) {
            /** @type {?} */
            const columnQuery = `
        SELECT
            DataBaseName || '~|~' || TableName || '~|~' || ColumnName as objectName,
            'column' as objectType,
            ColumnType as kind,
            CommentString
        FROM dbc.columnsVX
        WHERE columnname LIKE '%${searchStr}%'
        AND DataBaseName NOT IN ('${sysDatabases.join("', '")}')
      `;
            queries.push(columnQuery);
        }
        /** @type {?} */
        const unionJoin = queries.join('UNION');
        /** @type {?} */
        const queryStr = `
      WITH quick_search AS (
          ${unionJoin}
      )
      SELECT * FROM quick_search
      ORDER BY 1
      SAMPLE 100;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                /** @type {?} */
                let kind = row.kind;
                // map to proper type/kind
                if (row.objectType === 'column') {
                    kind = 'column';
                }
                else if (row.objectType === 'database') {
                    kind = kind === 'D' ? 'database' : 'user';
                }
                else {
                    kind = kind === 'V' ? 'view' : 'table';
                }
                /** @type {?} */
                const newParent = [];
                // split name and parents..
                /** @type {?} */
                const nameSplit = row.objectName.split('~|~');
                for (let index = 0; index < nameSplit.length - 1; index++) {
                    newParent.push('"' + nameSplit[index] + '"');
                }
                return {
                    parent: newParent.join('.'),
                    name: nameSplit[nameSplit.length - 1],
                    kind,
                    type: row.objectType,
                    comment: row.CommentString,
                };
            }));
        })));
    }
}
VantageDictionaryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageDictionaryService.ctorParameters = () => [
    { type: VantageQueryService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageDictionaryService.prototype._queryService;
}
/**
 * @param {?} parent
 * @param {?} queryService
 * @return {?}
 */
function VANTAGE_DICTIONARY_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageDictionaryService(queryService);
}
/** @type {?} */
const VANTAGE_DICTIONARY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageDictionaryService,
    deps: [[new Optional(), new SkipSelf(), VantageDictionaryService], VantageQueryService],
    useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONNECTION_SESSION_KEY = 'vantage.editor.connection';
class VantageConnectionService {
    /**
     * @param {?} _queryService
     */
    constructor(_queryService) {
        this._queryService = _queryService;
    }
    /**
     * @return {?}
     */
    get current() {
        return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
    }
    /**
     * @return {?}
     */
    disconnect() {
        sessionStorage.removeItem(CONNECTION_SESSION_KEY);
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    connect(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            // clear connection before starting a new one
            this.disconnect();
            // test connection with SELECT 1
            yield this._queryService
                .querySystem(connection, { query: 'SELECT 1;' })
                .pipe(timeout(7000), retry(1))
                .toPromise();
            // if successful, save
            this.store(connection);
        });
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    store({ system, creds }) {
        sessionStorage.setItem(CONNECTION_SESSION_KEY, JSON.stringify({ system, creds }));
    }
}
VantageConnectionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageConnectionService.ctorParameters = () => [
    { type: VantageQueryService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageConnectionService.prototype._queryService;
}
/**
 * @param {?} parent
 * @param {?} queryService
 * @return {?}
 */
function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageConnectionService(queryService);
}
/** @type {?} */
const VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService],
    useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageSQLEModule {
}
VantageSQLEModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_CONNECTION_PROVIDER, VANTAGE_DICTIONARY_PROVIDER, VANTAGE_QUERY_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageError {
}
if (false) {
    /** @type {?} */
    VantageError.prototype.message;
    /** @type {?} */
    VantageError.prototype.error;
}
class VantageErrorService {
    /**
     * @param {?} _dialogService
     * @param {?} _translate
     */
    constructor(_dialogService, _translate) {
        this._dialogService = _dialogService;
        this._translate = _translate;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    open(error) {
        if (error) {
            /** @type {?} */
            const config = {
                title: this._translate.instant('THERE_WAS_A_PROBLEM'),
                message: error.message,
                disableClose: true,
                closeButton: this._translate.instant('CLOSE'),
            };
            if (error.error) {
                config.message += ` (${error.error.toString()})`;
            }
            if (config.message || config.title) {
                return this._dialogService.openAlert(config);
            }
        }
    }
}
VantageErrorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageErrorService.ctorParameters = () => [
    { type: TdDialogService },
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageErrorService.prototype._dialogService;
    /**
     * @type {?}
     * @private
     */
    VantageErrorService.prototype._translate;
}
/**
 * @param {?} parent
 * @param {?} dialogService
 * @param {?} translate
 * @return {?}
 */
function VANTAGE_ERROR_PROVIDER_FACTORY(parent, dialogService, translate) {
    return parent || new VantageErrorService(dialogService, translate);
}
/** @type {?} */
const VANTAGE_ERROR_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageErrorService,
    deps: [[new Optional(), new SkipSelf(), VantageErrorService], TdDialogService, TranslateService],
    useFactory: VANTAGE_ERROR_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageToastService {
    /**
     * @param {?} _snackBarService
     * @param {?} _media
     */
    constructor(_snackBarService, _media) {
        this._snackBarService = _snackBarService;
        this._media = _media;
    }
    /**
     * @param {?} message
     * @param {?=} time
     * @return {?}
     */
    open(message, time = 3000) {
        if (message) {
            this._snackBarService.open(message, undefined, {
                duration: time,
                horizontalPosition: this._media && this._media.query('gt-sm') ? 'end' : 'center',
            });
        }
    }
}
VantageToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageToastService.ctorParameters = () => [
    { type: MatSnackBar },
    { type: TdMediaService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageToastService.prototype._snackBarService;
    /**
     * @type {?}
     * @private
     */
    VantageToastService.prototype._media;
}
/**
 * @param {?} parent
 * @param {?} snackBar
 * @param {?} media
 * @return {?}
 */
function VANTAGE_TOAST_PROVIDER_FACTORY(parent, snackBar, media) {
    return parent || new VantageToastService(snackBar, media);
}
/** @type {?} */
const VANTAGE_TOAST_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageToastService,
    deps: [[new Optional(), new SkipSelf(), VantageToastService], MatSnackBar, [new Optional(), TdMediaService]],
    useFactory: VANTAGE_TOAST_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageUserFeedbackModule {
}
VantageUserFeedbackModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatSnackBarModule, CovalentDialogsModule, CovalentMediaModule],
                providers: [VANTAGE_ERROR_PROVIDER, VANTAGE_TOAST_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
const VantageTheme = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
};
class VantageThemeService {
    /**
     * @param {?} _document
     * @param {?} rendererFactory
     */
    constructor(_document, rendererFactory) {
        this._document = _document;
        this.rendererFactory = rendererFactory;
        this._activeThemeSubject = new BehaviorSubject((/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY))));
        this.activeTheme$ = this._activeThemeSubject.asObservable();
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
        fromEvent(window, 'storage')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.key === THEME_LOCAL_STORAGE_KEY)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.applyTheme((/** @type {?} */ (event.newValue)))));
    }
    /**
     * @private
     * @return {?}
     */
    get activeTheme() {
        return this._activeThemeSubject.getValue();
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    set activeTheme(theme) {
        this._activeThemeSubject.next(theme);
    }
    /**
     * @return {?}
     */
    get darkThemeIsActive() {
        return this.activeTheme === VantageTheme.DARK;
    }
    /**
     * @return {?}
     */
    get lightThemeIsActive() {
        return this.activeTheme === VantageTheme.LIGHT;
    }
    /**
     * @return {?}
     */
    applyLightTheme() {
        this.applyTheme(VantageTheme.LIGHT);
    }
    /**
     * @return {?}
     */
    applyDarkTheme() {
        this.applyTheme(VantageTheme.DARK);
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    applyTheme(theme) {
        this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        this._renderer2.addClass(this._document.querySelector('html'), theme);
        this.activeTheme = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
    }
}
VantageThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VantageThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];
/** @nocollapse */ VantageThemeService.ɵprov = ɵɵdefineInjectable({ factory: function VantageThemeService_Factory() { return new VantageThemeService(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2)); }, token: VantageThemeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._activeThemeSubject;
    /** @type {?} */
    VantageThemeService.prototype.activeTheme$;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype.rendererFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LDAPEncription, SystemType, VANTAGE_CONNECTION_PROVIDER, VANTAGE_CONNECTION_PROVIDER_FACTORY, VANTAGE_DICTIONARY_PROVIDER, VANTAGE_DICTIONARY_PROVIDER_FACTORY, VANTAGE_QUERY_PROVIDER, VANTAGE_QUERY_PROVIDER_FACTORY, VANTAGE_SYSTEMS_TYPES, VantageAuditModule, VantageAuditService, VantageConnectionService, VantageDictionaryService, VantageError, VantageErrorService, VantageGroupService, VantageLDAPService, VantageNotificationModule, VantageQueryService, VantageSMTPService, VantageSQLEModule, VantageSystemModule, VantageSystemService, VantageTheme, VantageThemeService, VantageToastService, VantageUserFeedbackModule, VantageUserModule, VantageUserService, sysDatabases, VANTAGE_AUDIT_PROVIDER_FACTORY as ɵa, VANTAGE_AUDIT_PROVIDER as ɵb, VANTAGE_SMTP_PROVIDER_FACTORY as ɵc, VANTAGE_SMTP_PROVIDER as ɵd, VANTAGE_SYSTEM_PROVIDER_FACTORY as ɵe, VANTAGE_SYSTEM_PROVIDER as ɵf, VANTAGE_LDAP_PROVIDER_FACTORY as ɵg, VANTAGE_LDAP_PROVIDER as ɵh, VANTAGE_GROUP_PROVIDER_FACTORY as ɵi, VANTAGE_GROUP_PROVIDER as ɵj, VANTAGE_USER_PROVIDER_FACTORY as ɵk, VANTAGE_USER_PROVIDER as ɵl, VANTAGE_ERROR_PROVIDER_FACTORY as ɵm, VANTAGE_ERROR_PROVIDER as ɵn, VANTAGE_TOAST_PROVIDER_FACTORY as ɵo, VANTAGE_TOAST_PROVIDER as ɵp };
//# sourceMappingURL=td-vantage-ui-platform.js.map
