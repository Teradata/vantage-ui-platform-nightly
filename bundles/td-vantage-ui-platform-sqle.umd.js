(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@covalent/http'), require('@ngx-translate/core'), require('rxjs'), require('@angular/material/dialog'), require('@covalent/core/loading'), require('@td-vantage/ui-platform/system'), require('@angular/common'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/radio'), require('@angular/material/icon'), require('@covalent/core/message')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/sqle', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@covalent/http', '@ngx-translate/core', 'rxjs', '@angular/material/dialog', '@covalent/core/loading', '@td-vantage/ui-platform/system', '@angular/common', '@angular/forms', '@angular/material/card', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/select', '@angular/material/radio', '@angular/material/icon', '@covalent/core/message'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].sqle = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.covalent.http, global['ngx-translate'].core, global.rxjs, global.ng.material.dialog, global.covalent.core.loading, global['td-vantage']['ui-platform'].system, global.ng.common, global.ng.forms, global.ng.material.card, global.ng.material.button, global.ng.material['form-field'], global.ng.material.input, global.ng.material.select, global.ng.material.radio, global.ng.material.icon, global.covalent.core.message));
}(this, (function (exports, core, http, operators, http$1, core$1, rxjs, dialog, loading, system, common, forms, card, button, formField, input, select, radio, icon, message) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    var VantageQueryService = /** @class */ (function () {
        function VantageQueryService(_http) {
            this._http = _http;
        }
        /**
         * @param {?} connection
         * @param {?} payload
         * @return {?}
         */
        VantageQueryService.prototype.querySystem = /**
         * @param {?} connection
         * @param {?} payload
         * @return {?}
         */
        function (connection, payload) {
            var _a, _b, _c;
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
                /** @type {?} */
                var attributes = (_a = connection.system.system_attributes) === null || _a === void 0 ? void 0 : _a.attributes;
                payload.logMech = ((_b = attributes) === null || _b === void 0 ? void 0 : _b.log_mech) || ((_c = attributes) === null || _c === void 0 ? void 0 : _c.logMech) || 'DEFAULT';
            }
            else {
                payload.logMech = 'JWT';
            }
            payload.clientId = 'VANTAGE.EDITOR';
            /** @type {?} */
            var request = this._http.post('/api/query/tdrest/systems/' + connection.system.nickname + '/queries', payload, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} databaseName
         * @param {?} tableName
         * @return {?}
         */
        VantageQueryService.prototype.getTableInfo = /**
         * @param {?} connection
         * @param {?} databaseName
         * @param {?} tableName
         * @return {?}
         */
        function (connection, databaseName, tableName) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.get("/api/query/systems/" + connection.system.nickname + "/databases/" + databaseName + "/tables/" + tableName, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} databaseName
         * @param {?} viewName
         * @return {?}
         */
        VantageQueryService.prototype.getViewInfo = /**
         * @param {?} connection
         * @param {?} databaseName
         * @param {?} viewName
         * @return {?}
         */
        function (connection, databaseName, viewName) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.get("/api/query/systems/" + connection.system.nickname + "/databases/" + databaseName + "/views/" + viewName, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} requestId
         * @return {?}
         */
        VantageQueryService.prototype.getQuery = /**
         * @param {?} connection
         * @param {?} requestId
         * @return {?}
         */
        function (connection, requestId) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + requestId, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} sessionId
         * @return {?}
         */
        VantageQueryService.prototype.getQueries = /**
         * @param {?} connection
         * @param {?} sessionId
         * @return {?}
         */
        function (connection, sessionId) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries?session=' + sessionId, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} queryId
         * @return {?}
         */
        VantageQueryService.prototype.getQueryResult = /**
         * @param {?} connection
         * @param {?} queryId
         * @return {?}
         */
        function (connection, queryId) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId + '/results', { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} queryId
         * @return {?}
         */
        VantageQueryService.prototype.deleteQuery = /**
         * @param {?} connection
         * @param {?} queryId
         * @return {?}
         */
        function (connection, queryId) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageQueryService.prototype.createSession = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            var _a, _b, _c;
            /** @type {?} */
            var payload = {
                autoCommit: 'true',
                transactionMode: 'TERA',
                charSet: 'UTF8',
            };
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
                /** @type {?} */
                var attributes = (_a = connection.system.system_attributes) === null || _a === void 0 ? void 0 : _a.attributes;
                payload.logMech = ((_b = attributes) === null || _b === void 0 ? void 0 : _b.log_mech) || ((_c = attributes) === null || _c === void 0 ? void 0 : _c.logMech) || 'DEFAULT';
            }
            else {
                payload.logMech = 'JWT';
            }
            /** @type {?} */
            var request = this._http.post('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions', payload, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        /**
         * @param {?} connection
         * @param {?} sessionId
         * @return {?}
         */
        VantageQueryService.prototype.deleteSession = /**
         * @param {?} connection
         * @param {?} sessionId
         * @return {?}
         */
        function (connection, sessionId) {
            /** @type {?} */
            var headers = new http.HttpHeaders()
                .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
                .append('Content-Type', 'application/json');
            if (connection.creds) {
                headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            }
            /** @type {?} */
            var request = this._http.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions/' + sessionId, { headers: headers });
            return request.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                throw Object.assign({}, error.error, { httpStatus: error.status });
            })), operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet;
            })));
        };
        VantageQueryService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageQueryService.ctorParameters = function () { return [
            { type: http$1.TdHttpService }
        ]; };
        return VantageQueryService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageQueryService.prototype._http;
    }
    /**
     * @param {?} parent
     * @param {?} tdHttpService
     * @return {?}
     */
    function VANTAGE_QUERY_PROVIDER_FACTORY(parent, tdHttpService) {
        return parent || new VantageQueryService(tdHttpService);
    }
    /** @type {?} */
    var VANTAGE_QUERY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageQueryService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageQueryService], http$1.TdHttpService],
        useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CONNECTION_SESSION_KEY = 'vantage.editor.connection';
    /**
     * @return {?}
     */
    function current() {
        try {
            return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
        }
        catch (_a) {
            return undefined;
        }
    }
    var VantageConnectionService = /** @class */ (function () {
        function VantageConnectionService(_queryService) {
            this._queryService = _queryService;
        }
        Object.defineProperty(VantageConnectionService.prototype, "current", {
            get: /**
             * @return {?}
             */
            function () {
                return current();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VantageConnectionService.prototype.disconnect = /**
         * @return {?}
         */
        function () {
            sessionStorage.removeItem(CONNECTION_SESSION_KEY);
        };
        /**
         * @param {?} connection
         * @param {?=} opts
         * @return {?}
         */
        VantageConnectionService.prototype.connect = /**
         * @param {?} connection
         * @param {?=} opts
         * @return {?}
         */
        function (connection, opts) {
            var _this = this;
            var _a;
            // clear connection before starting a new one
            this.disconnect();
            // test connection with SELECT 1
            return this._queryService.querySystem(connection, { query: 'SELECT 1;' }).pipe(
            // timeout connection if more than 7 seconds
            operators.timeout(((_a = opts) === null || _a === void 0 ? void 0 : _a.timeout) || 7000), 
            // retry only after a certain number of attempts or if the error is something else than 420
            operators.retryWhen((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                return errors.pipe(operators.mergeMap((/**
                 * @param {?} error
                 * @param {?} index
                 * @return {?}
                 */
                function (error, index) {
                    var _a;
                    /** @type {?} */
                    var retryAttempt = index + 1;
                    if (retryAttempt > (((_a = opts) === null || _a === void 0 ? void 0 : _a.attempts) || 2) || error.httpStatus === 420) {
                        return rxjs.throwError(error);
                    }
                    return rxjs.timer(0);
                })));
            })), operators.tap((/**
             * @return {?}
             */
            function () { return _this.store(connection); })), // if successful, save
            operators.mapTo(connection));
        };
        /**
         * @private
         * @param {?} __0
         * @return {?}
         */
        VantageConnectionService.prototype.store = /**
         * @private
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var system = _a.system, creds = _a.creds;
            sessionStorage.setItem(CONNECTION_SESSION_KEY, JSON.stringify({ system: system, creds: creds }));
        };
        VantageConnectionService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageConnectionService.ctorParameters = function () { return [
            { type: VantageQueryService }
        ]; };
        return VantageConnectionService;
    }());
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
    var VANTAGE_CONNECTION_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageConnectionService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageConnectionService], VantageQueryService],
        useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ISpooledQueryError() { }
    if (false) {
        /** @type {?} */
        ISpooledQueryError.prototype.id;
        /** @type {?} */
        ISpooledQueryError.prototype.detailMessage;
    }
    /** @type {?} */
    var MAX_INTERVAL = 10000;
    /** @type {?} */
    var BASE_INTERVAL = 2000;
    /** @enum {string} */
    var SpooledQueryState = {
        QUEUED: 'QUEUED',
        PENDING: 'PENDING',
        SUBMITTED: 'SUBMITTED',
        RESPONDING: 'RESPONDING',
        SPOOLING: 'SPOOLING',
        RESULT_SET_READY: 'RESULT_SET_READY',
    };
    var VantageSpooledQueryService = /** @class */ (function () {
        function VantageSpooledQueryService(connectionService, queryService, translate) {
            this.connectionService = connectionService;
            this.queryService = queryService;
            this.translate = translate;
            this.queryStatus = new rxjs.BehaviorSubject(undefined);
            this.queryStatus$ = this.queryStatus.asObservable();
            this.queryStack = [];
        }
        /**
         * @return {?}
         */
        VantageSpooledQueryService.prototype.cancelLastQuery = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var thisQuery = this.queryStack.pop();
            return this.deleteSpooledQuery(thisQuery);
        };
        /**
         * @return {?}
         */
        VantageSpooledQueryService.prototype.getRunningInfo = /**
         * @return {?}
         */
        function () {
            return this.queryStatus$;
        };
        /**
         * @param {?} payload
         * @return {?}
         */
        VantageSpooledQueryService.prototype.querySystem = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            var _this = this;
            return this.queryService.querySystem(this.connectionService.current, __assign(__assign({}, payload), { spooledResultSet: true })).pipe(operators.tap((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.queryStack.push(res.id); })), operators.switchMap((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.exponentialBackOffInterval(MAX_INTERVAL, res.id); })), operators.switchMap((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                return _this.queryService.getQuery(_this.connectionService.current, id.toString()).pipe(operators.map((/**
                 * @param {?} query
                 * @return {?}
                 */
                function (query) { return query.queryState; })), operators.tap((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return _this.queryStatus.next(val); })), operators.map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return [id, val]; })));
            })), operators.skipWhile((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), id = _b[0], status = _b[1];
                return status !== SpooledQueryState.RESULT_SET_READY;
            })), operators.take(1), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 1), id = _b[0];
                return _this.queryService.getQueryResult(_this.connectionService.current, id).pipe(operators.map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return [id, val]; })), operators.tap((/**
                 * @return {?}
                 */
                function () { return _this.queryStack.pop(); })), operators.catchError((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    return rxjs.throwError((/** @type {?} */ (__assign(__assign(__assign({}, res), { id: id }), { detailMessage: "Error " + res.error.error + ": " + res.error.message }))));
                })));
            })), operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), id = _b[0], results = _b[1];
                return results;
            })));
        };
        /**
         * @param {?} maxInterval
         * @param {?} returnVal
         * @return {?}
         */
        VantageSpooledQueryService.prototype.exponentialBackOffInterval = /**
         * @param {?} maxInterval
         * @param {?} returnVal
         * @return {?}
         */
        function (maxInterval, returnVal) {
            var _this = this;
            return rxjs.of(0).pipe(operators.expand((/**
             * @param {?} iteration
             * @return {?}
             */
            function (iteration) { return rxjs.timer(_this.calcInterval(iteration, maxInterval)).pipe(operators.mapTo(iteration + 1)); })), operators.mapTo(returnVal));
        };
        /**
         * @param {?} iteration
         * @param {?} maxInterval
         * @return {?}
         */
        VantageSpooledQueryService.prototype.calcInterval = /**
         * @param {?} iteration
         * @param {?} maxInterval
         * @return {?}
         */
        function (iteration, maxInterval) {
            /** @type {?} */
            var expo = 1.4;
            /** @type {?} */
            var interval = Math.pow(expo, iteration) * BASE_INTERVAL;
            return Math.min(interval, maxInterval);
        };
        /**
         * @param {?} queryId
         * @return {?}
         */
        VantageSpooledQueryService.prototype.deleteSpooledQuery = /**
         * @param {?} queryId
         * @return {?}
         */
        function (queryId) {
            var _this = this;
            this.queryService.deleteQuery(this.connectionService.current, queryId).subscribe(undefined, (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                throw new Error(_this.translate.instant('SPOOLED_QUERY_COULD_NOT_BE_DELETED', { error: JSON.stringify(err) }));
            }));
        };
        VantageSpooledQueryService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageSpooledQueryService.ctorParameters = function () { return [
            { type: VantageConnectionService },
            { type: VantageQueryService },
            { type: core$1.TranslateService }
        ]; };
        return VantageSpooledQueryService;
    }());
    if (false) {
        /** @type {?} */
        VantageSpooledQueryService.prototype.queryStatus;
        /** @type {?} */
        VantageSpooledQueryService.prototype.queryStatus$;
        /** @type {?} */
        VantageSpooledQueryService.prototype.queryStack;
        /**
         * @type {?}
         * @private
         */
        VantageSpooledQueryService.prototype.connectionService;
        /**
         * @type {?}
         * @private
         */
        VantageSpooledQueryService.prototype.queryService;
        /**
         * @type {?}
         * @private
         */
        VantageSpooledQueryService.prototype.translate;
    }
    /**
     * @param {?} parent
     * @param {?} connectionService
     * @param {?} queryService
     * @param {?} translate
     * @return {?}
     */
    function VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY(parent, connectionService, queryService, translate) {
        return parent || new VantageSpooledQueryService(connectionService, queryService, translate);
    }
    /** @type {?} */
    var VANTAGE_SPOOLED_QUERY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageSpooledQueryService,
        deps: [
            [new core.Optional(), new core.SkipSelf(), VantageSpooledQueryService],
            VantageConnectionService,
            VantageQueryService,
            core$1.TranslateService,
        ],
        useFactory: VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sysDatabases = [
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
    var VantageDictionaryService = /** @class */ (function () {
        function VantageDictionaryService(_queryService) {
            this._queryService = _queryService;
        }
        /**
         * @param {?} connection
         * @param {?} database
         * @param {?} view
         * @return {?}
         */
        VantageDictionaryService.prototype.getViewHelp = /**
         * @param {?} connection
         * @param {?} database
         * @param {?} view
         * @return {?}
         */
        function (connection, database, view) {
            var _this = this;
            /** @type {?} */
            var queryStr = "\n      LOCK ROW FOR ACCESS\n      SELECT CAST(COUNT(*) AS BIGINT) as cnt\n      FROM " + database + "." + view + ";\n      SHOW VIEW " + database + "." + view + ";\n    ";
            return this._queryService.getViewInfo(connection, database, view).pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    return {
                        comment: column.remarks,
                        type: 'column',
                        columnType: column.type,
                        name: column.name,
                        database: resultSet.database,
                        table: resultSet.name,
                    };
                }));
            })), operators.switchMap((/**
             * @param {?} viewInfo
             * @return {?}
             */
            function (viewInfo) {
                return _this._queryService
                    .querySystem(connection, {
                    query: queryStr,
                })
                    .pipe(operators.map((/**
                 * @param {?} resultSet
                 * @return {?}
                 */
                function (resultSet) {
                    /** @type {?} */
                    var ddlStatement = '';
                    resultSet.results[1].data.forEach((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) {
                        ddlStatement += row['Request Text'];
                    }));
                    /** @type {?} */
                    var count;
                    resultSet.results[0].data.forEach((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) {
                        count = row.cnt;
                    }));
                    /** @type {?} */
                    var columns = viewInfo.map((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) {
                        return {
                            columnName: row.name,
                            type: row.columnType,
                        };
                    }));
                    return {
                        database: database,
                        view: view,
                        columns: columns,
                        count: count,
                        ddlStatement: ddlStatement,
                    };
                })));
            })));
        };
        /**
         * @param {?} connection
         * @param {?} database
         * @param {?} table
         * @return {?}
         */
        VantageDictionaryService.prototype.getTableHelp = /**
         * @param {?} connection
         * @param {?} database
         * @param {?} table
         * @return {?}
         */
        function (connection, database, table) {
            var _this = this;
            /** @type {?} */
            var queryStr = "\n      LOCK ROW FOR ACCESS\n      SELECT CAST(COUNT(*) AS BIGINT) as cnt\n      FROM " + database + "." + table + ";\n      SHOW TABLE " + database + "." + table + ";\n    ";
            return this._queryService.getTableInfo(connection, database, table).pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    return {
                        comment: column.remarks,
                        type: 'column',
                        columnType: column.type,
                        name: column.name,
                        database: resultSet.database,
                        table: resultSet.name,
                    };
                }));
            })), operators.switchMap((/**
             * @param {?} info
             * @return {?}
             */
            function (info) {
                return _this._queryService
                    .querySystem(connection, {
                    query: queryStr,
                })
                    .pipe(operators.map((/**
                 * @param {?} resultSet
                 * @return {?}
                 */
                function (resultSet) {
                    /** @type {?} */
                    var ddlStatement = '';
                    resultSet.results[1].data.forEach((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) {
                        ddlStatement += row['Request Text'];
                    }));
                    /** @type {?} */
                    var count;
                    resultSet.results[0].data.forEach((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) {
                        count = row.cnt;
                    }));
                    /** @type {?} */
                    var columns = info.map((/**
                     * @param {?} row
                     * @return {?}
                     */
                    function (row) {
                        return {
                            columnName: row.name,
                            type: row.columnType,
                        };
                    }));
                    return {
                        database: database,
                        table: table,
                        columns: columns,
                        count: count,
                        ddlStatement: ddlStatement,
                    };
                })));
            })));
        };
        /**
         * @param {?} connection
         * @param {?} funcName
         * @return {?}
         */
        VantageDictionaryService.prototype.getDatabaseFunction = /**
         * @param {?} connection
         * @param {?} funcName
         * @return {?}
         */
        function (connection, funcName) {
            /** @type {?} */
            var queryStr = "\n      HELP 'SQL " + funcName + "';\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                /** @type {?} */
                var stringArray = resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return row['On-Line Help'];
                }));
                return stringArray.join(' ');
            })));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getDatabaseFunctions = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      HELP 'SQL';\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                /** @type {?} */
                var stringArray = resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return row['On-Line Help'];
                }));
                /** @type {?} */
                var sqlHelp = stringArray.join(' ');
                /** @type {?} */
                var index = sqlHelp.indexOf('FUNCTIONS') + 12;
                sqlHelp = sqlHelp.substr(index, sqlHelp.length);
                return sqlHelp
                    .split(' ')
                    .filter((/**
                 * @param {?} func
                 * @return {?}
                 */
                function (func) {
                    return func;
                }))
                    .map((/**
                 * @param {?} func
                 * @return {?}
                 */
                function (func) {
                    return {
                        name: func,
                    };
                }));
            })));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getAnalyticalFunctions = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      HELP FOREIGN SCHEMA \"public\"@coprocessor;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        name: row.objectname,
                    };
                }));
            })));
        };
        /**
         * @param {?} connection
         * @param {?} analyticalFunction
         * @return {?}
         */
        VantageDictionaryService.prototype.getAnalyticalFunction = /**
         * @param {?} connection
         * @param {?} analyticalFunction
         * @return {?}
         */
        function (connection, analyticalFunction) {
            /** @type {?} */
            var queryStr = "\n      HELP FOREIGN FUNCTION \"public\".\"" + analyticalFunction + "\"@coprocessor;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                /** @type {?} */
                var functionName = '';
                /** @type {?} */
                var shortDescription = '';
                /** @type {?} */
                var longDescription = '';
                /** @type {?} */
                var usageSyntax = '';
                /** @type {?} */
                var inputColumns = '';
                /** @type {?} */
                var outputColumns = '';
                /** @type {?} */
                var functionOwner = '';
                /** @type {?} */
                var creationTime = '';
                /** @type {?} */
                var functionVersion = '';
                /** @type {?} */
                var interfacesImplemented = '';
                /** @type {?} */
                var stringArray = resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return row['Function Help'];
                }));
                for (var index = 0; index < stringArray.length; index++) {
                    /** @type {?} */
                    var value = stringArray[index];
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
                    functionName: functionName,
                    shortDescription: shortDescription,
                    longDescription: longDescription,
                    usageSyntax: usageSyntax,
                    inputColumns: inputColumns,
                    outputColumns: outputColumns,
                };
            })));
        };
        /**
         * @param {?} resultSet
         * @return {?}
         */
        VantageDictionaryService.prototype.resultSetPredicate = /**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return {
                    name: row.TableName,
                    requestText: row.RequestText,
                    comment: row.CommentString,
                    kind: row.TableKind,
                };
            }));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getStoredProcedures = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx\n      WHERE TableKind = 'P'\n      ORDER BY TableName ASC;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map(this.resultSetPredicate));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getExternalStoredProcedures = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx\n      WHERE TableKind = 'E'\n      ORDER BY TableName ASC;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map(this.resultSetPredicate));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getMacros = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx\n      WHERE TableKind = 'M'\n      ORDER BY TableName ASC;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map(this.resultSetPredicate));
        };
        /**
         * @param {?} resultSet
         * @return {?}
         */
        VantageDictionaryService.prototype.functionsvxPredicate = /**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
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
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getTableOperators = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,\n      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind\n      FROM dbc.functionsvx as func\n      INNER JOIN dbc.tablesvx as tbl\n      ON tbl.TableName = func.SpecificName\n      AND tbl.DataBaseName = func.DatabaseName\n      WHERE FunctionType = 'L'\n      ORDER BY func.FunctionName ASC;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map(this.functionsvxPredicate));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getTableFunctions = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,\n      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind\n      FROM dbc.functionsvx as func\n      INNER JOIN dbc.tablesvx as tbl\n      ON tbl.TableName = func.SpecificName\n      AND tbl.DataBaseName = func.DatabaseName\n      WHERE FunctionType = 'R'\n      ORDER BY func.FunctionName ASC;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map(this.functionsvxPredicate));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getForeignServers = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = "\n      SELECT TableName, TableKind FROM DBC.TABLESVX\n      WHERE DATABASENAME = 'TD_SERVER_DB' AND\n      TABLEKIND = 'K' AND\n      TableName <> 'coprocesor';\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        name: row.TableName,
                        kind: row.TableKind,
                    };
                }));
            })));
        };
        /**
         * @param {?} connection
         * @param {?} foreignServer
         * @return {?}
         */
        VantageDictionaryService.prototype.getForeignSchemas = /**
         * @param {?} connection
         * @param {?} foreignServer
         * @return {?}
         */
        function (connection, foreignServer) {
            /** @type {?} */
            var queryStr = "\n      HELP FOREIGN SERVER " + foreignServer + ";\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        name: row.Schema,
                        kind: 'NONE',
                    };
                }));
            })));
        };
        /**
         * @param {?} connection
         * @param {?} foreignServer
         * @param {?} schema
         * @return {?}
         */
        VantageDictionaryService.prototype.getForeignTables = /**
         * @param {?} connection
         * @param {?} foreignServer
         * @param {?} schema
         * @return {?}
         */
        function (connection, foreignServer, schema) {
            /** @type {?} */
            var queryStr = "\n      HELP FOREIGN DATABASE \"" + schema + "\"@" + foreignServer + ";\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        name: row.Table,
                        kind: 'NONE',
                    };
                }));
            })));
        };
        /**
         * @param {?} connection
         * @param {?} foreignServer
         * @param {?} schema
         * @param {?} table
         * @return {?}
         */
        VantageDictionaryService.prototype.getForeignColumns = /**
         * @param {?} connection
         * @param {?} foreignServer
         * @param {?} schema
         * @param {?} table
         * @return {?}
         */
        function (connection, foreignServer, schema, table) {
            /** @type {?} */
            var queryStr = "\n      HELP FOREIGN TABLE \"" + schema + "\".\"" + table + "\"@" + foreignServer + ";\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        name: row.Column,
                        type: row.Type,
                    };
                }));
            })));
        };
        /**
         * @param {?} connection
         * @return {?}
         */
        VantageDictionaryService.prototype.getDatabases = /**
         * @param {?} connection
         * @return {?}
         */
        function (connection) {
            /** @type {?} */
            var queryStr = 'SELECT databasename, PermSpace, SpoolSpace, TempSpace, CommentString, DBKind FROM dbc.databasesVX ORDER BY databasename;';
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
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
        };
        /**
         * @param {?} connection
         * @param {?} databaseId
         * @return {?}
         */
        VantageDictionaryService.prototype.getDatabaseObjects = /**
         * @param {?} connection
         * @param {?} databaseId
         * @return {?}
         */
        function (connection, databaseId) {
            /** @type {?} */
            var queryStr = "SELECT DataBaseName, TableName, TableKind, CommentString FROM dbc.tablesvx\n       WHERE TableKind in ('T', 'O', 'V') AND DataBaseName = '" + databaseId + "' ORDER BY TableName ASC;";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    /** @type {?} */
                    var type = row.TableKind || row.tablekind;
                    return {
                        kind: row.TableKind || row.tablekind,
                        type: type === 'V' ? 'view' : 'table',
                        name: row.TableName || row.tablename,
                        database: row.DataBaseName || row.databasename,
                        comment: row.CommentString,
                    };
                }));
            })));
        };
        /**
         * @param {?} type
         * @param {?} connection
         * @param {?} databaseId
         * @param {?} tableId
         * @return {?}
         */
        VantageDictionaryService.prototype.getTableColumns = /**
         * @param {?} type
         * @param {?} connection
         * @param {?} databaseId
         * @param {?} tableId
         * @return {?}
         */
        function (type, connection, databaseId, tableId) {
            if (type === 'table') {
                return this._queryService.getTableInfo(connection, databaseId, tableId).pipe(operators.map((/**
                 * @param {?} resultSet
                 * @return {?}
                 */
                function (resultSet) {
                    return resultSet.columns.map((/**
                     * @param {?} column
                     * @return {?}
                     */
                    function (column) {
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
                return this._queryService.getViewInfo(connection, databaseId, tableId).pipe(operators.map((/**
                 * @param {?} resultSet
                 * @return {?}
                 */
                function (resultSet) {
                    return resultSet.columns.map((/**
                     * @param {?} column
                     * @return {?}
                     */
                    function (column) {
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
        };
        /**
         * @param {?} connection
         * @param {?} searchStr
         * @param {?=} options
         * @return {?}
         */
        VantageDictionaryService.prototype.search = /**
         * @param {?} connection
         * @param {?} searchStr
         * @param {?=} options
         * @return {?}
         */
        function (connection, searchStr, options) {
            if (options === void 0) { options = {
                databases: true,
                objects: true,
                columns: true,
            }; }
            /** @type {?} */
            var queries = [];
            if (options.databases) {
                /** @type {?} */
                var dbQuery = "\n        SELECT\n            DatabaseName as objectName,\n            'database' as objectType,\n            DBKind as kind,\n            CommentString\n        FROM dbc.databasesvx\n        WHERE DatabaseName LIKE '%" + searchStr + "%'\n        AND DataBaseName NOT IN ('" + sysDatabases.join("', '") + "')\n      ";
                queries.push(dbQuery);
            }
            if (options.objects) {
                /** @type {?} */
                var objectQuery = "\n        SELECT\n            DataBaseName || '~|~' || TableName as objectName,\n            'object' as objectType,\n            TableKind as kind,\n            CommentString\n        FROM dbc.tablesvx\n        WHERE TableKind in ('T', 'O', 'V')\n        AND TableName LIKE '%" + searchStr + "%'\n        AND DataBaseName NOT IN ('" + sysDatabases.join("', '") + "')\n      ";
                queries.push(objectQuery);
            }
            if (options.objects) {
                /** @type {?} */
                var columnQuery = "\n        SELECT\n            DataBaseName || '~|~' || TableName || '~|~' || ColumnName as objectName,\n            'column' as objectType,\n            ColumnType as kind,\n            CommentString\n        FROM dbc.columnsVX\n        WHERE columnname LIKE '%" + searchStr + "%'\n        AND DataBaseName NOT IN ('" + sysDatabases.join("', '") + "')\n      ";
                queries.push(columnQuery);
            }
            /** @type {?} */
            var unionJoin = queries.join('UNION');
            /** @type {?} */
            var queryStr = "\n      WITH quick_search AS (\n          " + unionJoin + "\n      )\n      SELECT * FROM quick_search\n      ORDER BY 1\n      SAMPLE 100;\n    ";
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(operators.map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.results[0].data.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    /** @type {?} */
                    var kind = row.kind;
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
                    var newParent = [];
                    // split name and parents..
                    /** @type {?} */
                    var nameSplit = row.objectName.split('~|~');
                    for (var index = 0; index < nameSplit.length - 1; index++) {
                        newParent.push('"' + nameSplit[index] + '"');
                    }
                    return {
                        parent: newParent.join('.'),
                        name: nameSplit[nameSplit.length - 1],
                        kind: kind,
                        type: row.objectType,
                        comment: row.CommentString,
                    };
                }));
            })));
        };
        VantageDictionaryService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageDictionaryService.ctorParameters = function () { return [
            { type: VantageQueryService }
        ]; };
        return VantageDictionaryService;
    }());
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
    var VANTAGE_DICTIONARY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageDictionaryService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageDictionaryService], VantageQueryService],
        useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageCredentialsDialogComponent = /** @class */ (function () {
        function VantageCredentialsDialogComponent(_dialogRef, _connectionService, _systemService, _loadingService, _translate) {
            this._dialogRef = _dialogRef;
            this._connectionService = _connectionService;
            this._systemService = _systemService;
            this._loadingService = _loadingService;
            this._translate = _translate;
            // listens to times we try to connect regardless
            this._connectionAttempt$ = new rxjs.Subject();
            this.connectionAttempt$ = this._connectionAttempt$.asObservable();
            this.basicAuthEnabled = false;
            this.connectionType = false;
        }
        /**
         * @return {?}
         */
        VantageCredentialsDialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // prepopulate connection type
            this.connectionType = this.basicAuthEnabled;
            // prep systems observable
            /** @type {?} */
            var queryParams = new http.HttpParams();
            queryParams = queryParams.append('systemType', 'TERADATA');
            this.systems$ = this._systemService.query(queryParams).pipe(operators.retry(2), operators.catchError((/**
             * @return {?}
             */
            function () {
                _this.errorMsg = _this._translate.instant('ERROR_RETRIEVE_DATA');
                return rxjs.of({ data: [] });
            })), operators.map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return resp.data; })), operators.tap((/**
             * @param {?} systems
             * @return {?}
             */
            function (systems) {
                if (systems && systems.length) {
                    // select first system by default if no system was prepopulated
                    if (!_this.system) {
                        _this.system = systems[0];
                    }
                    // if there is only one system and basic auth disabled, we try to connect to it automagically
                    if (systems.length === 1 && !_this.basicAuthEnabled) {
                        _this.connect();
                    }
                }
            })));
        };
        /**
         * @return {?}
         */
        VantageCredentialsDialogComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // finallize subject
            this._connectionAttempt$.complete();
        };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        VantageCredentialsDialogComponent.prototype.compareSystemWith = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return a && b && a.nickname === b.nickname;
        };
        /**
         * @return {?}
         */
        VantageCredentialsDialogComponent.prototype.connect = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var connection, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            this.errorMsg = undefined;
                            // block users from closing the dialog while connecting
                            this._dialogRef.disableClose = true;
                            this._loadingService.register('system.connect');
                            connection = this.connectionType
                                ? { system: this.system, creds: btoa(this.username + ':' + this.password) }
                                : { system: this.system };
                            return [4 /*yield*/, this._connectionService.connect(connection).toPromise()];
                        case 1:
                            _a.sent();
                            this._dialogRef.close(connection);
                            return [3 /*break*/, 4];
                        case 2:
                            error_1 = _a.sent();
                            this.errorMsg = error_1.message;
                            return [3 /*break*/, 4];
                        case 3:
                            this._connectionAttempt$.next();
                            // allow users to close dialog again
                            this._dialogRef.disableClose = false;
                            this._loadingService.resolve('system.connect');
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        VantageCredentialsDialogComponent.prototype.cancel = /**
         * @return {?}
         */
        function () {
            this._dialogRef.close();
        };
        VantageCredentialsDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-sqle-credentials-dialog',
                        template: "<div layout=\"column\" layout-fill>\n  <ng-template tdLoading=\"system.connect\" tdLoadingStrategy=\"overlay\">\n    <div *tdLoading=\"let systems; until: systems$ | async\" flex layout=\"column\">\n      <mat-card-title>{{ 'CREATE_CONNECTION' | translate }}</mat-card-title>\n      <div *ngIf=\"errorMsg\">\n        <td-message [sublabel]=\"errorMsg\" color=\"warn\" id=\"vui-credentials-dialog-invalid-message\"></td-message>\n      </div>\n      <mat-card-content class=\"pad-top pad-right-xs pad-bottom pad-left-xs\" flex>\n        <form #form=\"ngForm\">\n          <ng-container *ngIf=\"systems?.length\">\n            <div layout=\"row\">\n              <mat-form-field class=\"vui-credentials-dialog-system\" appearance=\"outline\" flex>\n                <mat-label>\n                  {{ 'SYSTEM' | translate }}\n                </mat-label>\n                <mat-select\n                  id=\"vui-credentials-dialog-system-select\"\n                  [(ngModel)]=\"system\"\n                  name=\"system\"\n                  [compareWith]=\"compareSystemWith\"\n                  required\n                >\n                  <mat-select-trigger>\n                    <div class=\"mat-body-1\">{{ system.nickname }}</div>\n                    <div class=\"mat-caption tc\">{{ system.host }}:{{ system.port }}</div>\n                  </mat-select-trigger>\n                  <mat-option\n                    [id]=\"'vui-credentials-dialog-' + sys.nickname\"\n                    *ngFor=\"let sys of systems\"\n                    [value]=\"sys\"\n                    class=\"vui-credentials-dialog-system-option\"\n                  >\n                    <div class=\"mat-body-1\">{{ sys.nickname }}</div>\n                    <div class=\"mat-caption\">{{ sys.host }}:{{ sys.port }}</div>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"basicAuthEnabled\" class=\"push-bottom\">\n              <mat-radio-group\n                id=\"vui-credentials-dialog-connection-radio\"\n                #radioGroup=\"matRadioGroup\"\n                [(ngModel)]=\"connectionType\"\n                name=\"connection\"\n                layout=\"column\"\n              >\n                <mat-radio-button class=\"push-xs\" [value]=\"false\">\n                  {{ 'USE_CURRENT_SESSION' | translate }}\n                </mat-radio-button>\n                <mat-radio-button class=\"push-xs\" [value]=\"true\">\n                  {{ 'ENTER_CREDENTIALS' | translate }}\n                </mat-radio-button>\n              </mat-radio-group>\n            </div>\n            <ng-container *ngIf=\"connectionType\">\n              <div layout=\"row\">\n                <mat-form-field appearance=\"outline\" flex>\n                  <mat-label>\n                    {{ 'USERNAME' | translate }}\n                  </mat-label>\n                  <input\n                    id=\"vui-credentials-dialog-username-input\"\n                    matInput\n                    (keyup.enter)=\"form.form.valid && connect()\"\n                    type=\"text\"\n                    [(ngModel)]=\"username\"\n                    name=\"username\"\n                    required\n                    cdkFocusInitial\n                  />\n                </mat-form-field>\n              </div>\n              <div layout=\"row\">\n                <mat-form-field appearance=\"outline\" flex>\n                  <mat-label>\n                    {{ 'PASSWORD' | translate }}\n                  </mat-label>\n                  <input\n                    id=\"vui-credentials-dialog-password-input\"\n                    matInput\n                    (keyup.enter)=\"form.form.valid && connect()\"\n                    type=\"password\"\n                    [(ngModel)]=\"password\"\n                    name=\"password\"\n                    required\n                  />\n                </mat-form-field>\n              </div>\n            </ng-container>\n          </ng-container>\n          <div\n            *ngIf=\"systems && systems.length === 0\"\n            id=\"vui-credentials-dialog-empty-state\"\n            layout=\"column\"\n            layout-align=\"center center\"\n            flex\n            class=\"bgc-surface tc-grey-500 mat-typography pad-lg\"\n            [style.height.%]=\"100\"\n          >\n            <mat-icon matListAvatar class=\"text-super push-bottom\">dns</mat-icon>\n            <h2>{{ 'NO_SYSTEMS' | translate }}</h2>\n            <h3 class=\"text-center\">{{ 'NO_SYSTEMS.NOTE' | translate }}</h3>\n          </div>\n        </form>\n      </mat-card-content>\n      <div layout=\"row\" layout-align=\"end center\" class=\"pull-right-lg\">\n        <button\n          id=\"vui-credentials-dialog-cancel-button\"\n          mat-button\n          class=\"text-upper push-right-sm\"\n          (click)=\"cancel()\"\n        >\n          {{ 'CANCEL' | translate }}\n        </button>\n        <button\n          id=\"vui-credentials-dialog-connect-button\"\n          mat-raised-button\n          [disabled]=\"!form.valid || !systems || systems?.length === 0\"\n          color=\"primary\"\n          class=\"text-upper\"\n          (click)=\"connect()\"\n        >\n          {{ 'CONNECT' | translate }}\n        </button>\n      </div>\n    </div>\n  </ng-template>\n</div>\n",
                        styles: ["::ng-deep .vui-credentials-dialog-system .mat-form-field-infix{padding:.4em 0 .6em}::ng-deep .vui-credentials-dialog-system.mat-form-field-appearance-outline .mat-select-arrow-wrapper{-webkit-transform:translateY(-6%);transform:translateY(-6%)}::ng-deep .vui-credentials-dialog-system .vui-credentials-dialog-system-option .mat-option-text{line-height:14px}"]
                    }] }
        ];
        /** @nocollapse */
        VantageCredentialsDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef },
            { type: VantageConnectionService },
            { type: system.VantageSystemService },
            { type: loading.TdLoadingService },
            { type: core$1.TranslateService }
        ]; };
        return VantageCredentialsDialogComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageCredentialsDialogComponent.prototype._connectionAttempt$;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.connectionAttempt$;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.basicAuthEnabled;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.systems$;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.system;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.connectionType;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.username;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.password;
        /** @type {?} */
        VantageCredentialsDialogComponent.prototype.errorMsg;
        /**
         * @type {?}
         * @private
         */
        VantageCredentialsDialogComponent.prototype._dialogRef;
        /**
         * @type {?}
         * @private
         */
        VantageCredentialsDialogComponent.prototype._connectionService;
        /**
         * @type {?}
         * @private
         */
        VantageCredentialsDialogComponent.prototype._systemService;
        /**
         * @type {?}
         * @private
         */
        VantageCredentialsDialogComponent.prototype._loadingService;
        /**
         * @type {?}
         * @private
         */
        VantageCredentialsDialogComponent.prototype._translate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageSQLEModule = /** @class */ (function () {
        function VantageSQLEModule() {
        }
        VantageSQLEModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [VantageCredentialsDialogComponent],
                        exports: [VantageCredentialsDialogComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            card.MatCardModule,
                            button.MatButtonModule,
                            dialog.MatDialogModule,
                            formField.MatFormFieldModule,
                            input.MatInputModule,
                            select.MatSelectModule,
                            radio.MatRadioModule,
                            icon.MatIconModule,
                            loading.CovalentLoadingModule,
                            message.CovalentMessageModule,
                            system.VantageSystemModule,
                            core$1.TranslateModule,
                        ],
                        providers: [
                            VANTAGE_CONNECTION_PROVIDER,
                            VANTAGE_DICTIONARY_PROVIDER,
                            VANTAGE_QUERY_PROVIDER,
                            VANTAGE_SPOOLED_QUERY_PROVIDER,
                        ],
                    },] }
        ];
        return VantageSQLEModule;
    }());

    exports.VANTAGE_CONNECTION_PROVIDER = VANTAGE_CONNECTION_PROVIDER;
    exports.VANTAGE_CONNECTION_PROVIDER_FACTORY = VANTAGE_CONNECTION_PROVIDER_FACTORY;
    exports.VANTAGE_DICTIONARY_PROVIDER = VANTAGE_DICTIONARY_PROVIDER;
    exports.VANTAGE_DICTIONARY_PROVIDER_FACTORY = VANTAGE_DICTIONARY_PROVIDER_FACTORY;
    exports.VANTAGE_QUERY_PROVIDER = VANTAGE_QUERY_PROVIDER;
    exports.VANTAGE_QUERY_PROVIDER_FACTORY = VANTAGE_QUERY_PROVIDER_FACTORY;
    exports.VANTAGE_SPOOLED_QUERY_PROVIDER = VANTAGE_SPOOLED_QUERY_PROVIDER;
    exports.VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY = VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY;
    exports.VantageConnectionService = VantageConnectionService;
    exports.VantageCredentialsDialogComponent = VantageCredentialsDialogComponent;
    exports.VantageDictionaryService = VantageDictionaryService;
    exports.VantageQueryService = VantageQueryService;
    exports.VantageSQLEModule = VantageSQLEModule;
    exports.VantageSpooledQueryService = VantageSpooledQueryService;
    exports.current = current;
    exports.sysDatabases = sysDatabases;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-sqle.umd.js.map
