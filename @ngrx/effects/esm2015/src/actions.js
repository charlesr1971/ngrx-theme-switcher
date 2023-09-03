/**
 * @fileoverview added by tsickle
 * Generated from: src/actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { ScannedActionsSubject, } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
/**
 * @template V
 */
export class Actions extends Observable {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        if (source) {
            this.source = source;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const observable = new Actions();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
}
Actions.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Actions.ctorParameters = () => [
    { type: Observable, decorators: [{ type: Inject, args: [ScannedActionsSubject,] }] }
];
/**
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofType(...allowedTypes) {
    return filter((/**
     * @param {?} action
     * @return {?}
     */
    (action) => allowedTypes.some((/**
     * @param {?} typeOrActionCreator
     * @return {?}
     */
    (typeOrActionCreator) => {
        if (typeof typeOrActionCreator === 'string') {
            // Comparing the string to type
            return typeOrActionCreator === action.type;
        }
        // We are filtering by ActionCreator
        return typeOrActionCreator.type === action.type;
    }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvIiwic291cmNlcyI6WyJzcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFJTCxxQkFBcUIsR0FDdEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLFVBQVUsRUFBOEIsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR3hDLE1BQU0sT0FBTyxPQUFvQixTQUFRLFVBQWE7Ozs7SUFDcEQsWUFBMkMsTUFBc0I7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztjQUN4QixVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUs7UUFDbkMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBZkYsVUFBVTs7OztZQUhGLFVBQVUsdUJBS0osTUFBTSxTQUFDLHFCQUFxQjs7Ozs7O0FBMEczQyxNQUFNLFVBQVUsTUFBTSxDQUNwQixHQUFHLFlBQTREO0lBRS9ELE9BQU8sTUFBTTs7OztJQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FDL0IsWUFBWSxDQUFDLElBQUk7Ozs7SUFBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUU7UUFDeEMsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFFBQVEsRUFBRTtZQUMzQywrQkFBK0I7WUFDL0IsT0FBTyxtQkFBbUIsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVDO1FBRUQsb0NBQW9DO1FBQ3BDLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQyxFQUFDLEVBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uQ3JlYXRvcixcbiAgQ3JlYXRvcixcbiAgU2Nhbm5lZEFjdGlvbnNTdWJqZWN0LFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aW9uczxWID0gQWN0aW9uPiBleHRlbmRzIE9ic2VydmFibGU8Vj4ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNjYW5uZWRBY3Rpb25zU3ViamVjdCkgc291cmNlPzogT2JzZXJ2YWJsZTxWPikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gIH1cblxuICBsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxWLCBSPik6IE9ic2VydmFibGU8Uj4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgQWN0aW9uczxSPigpO1xuICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG4gIH1cbn1cblxuLy8gTW9kdWxlLXByaXZhdGUgaGVscGVyIHR5cGVcbnR5cGUgQWN0aW9uRXh0cmFjdG9yPFxuICBUIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBFXG4+ID0gVCBleHRlbmRzIHN0cmluZyA/IEUgOiBSZXR1cm5UeXBlPEV4dHJhY3Q8VCwgQUM+Pjtcbi8qKlxuICogJ29mVHlwZScgZmlsdGVycyBhbiBPYnNlcnZhYmxlIG9mIEFjdGlvbnMgaW50byBhbiBvYnNlcnZhYmxlIG9mIHRoZSBhY3Rpb25zXG4gKiB3aG9zZSB0eXBlIHN0cmluZ3MgYXJlIHBhc3NlZCB0byBpdC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgYGFjdGlvbnNgIGhhcyB0eXBlIGBBY3Rpb25zPEFkZGl0aW9uQWN0aW9ufFN1YnN0cmFjdGlvbkFjdGlvbj5gLCBhbmRcbiAqIHRoZSB0eXBlIG9mIHRoZSBgQWRkaXRpb25gIGFjdGlvbiBpcyBgYWRkYCwgdGhlblxuICogYGFjdGlvbnMucGlwZShvZlR5cGUoJ2FkZCcpKWAgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZTxBZGRpdGlvbkFjdGlvbj5gLlxuICpcbiAqIFByb3Blcmx5IHR5cGluZyB0aGlzIGZ1bmN0aW9uIGlzIGhhcmQgYW5kIHJlcXVpcmVzIHNvbWUgYWR2YW5jZWQgVFMgdHJpY2tzXG4gKiBiZWxvdy5cbiAqXG4gKiBUeXBlIG5hcnJvd2luZyBhdXRvbWF0aWNhbGx5IHdvcmtzLCBhcyBsb25nIGFzIHlvdXIgYGFjdGlvbnNgIG9iamVjdFxuICogc3RhcnRzIHdpdGggYSBgQWN0aW9uczxTb21lVW5pb25PZkFjdGlvbnM+YCBpbnN0ZWFkIG9mIGdlbmVyaWMgYEFjdGlvbnNgLlxuICpcbiAqIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2hlbiBvbmUgcGFzc2VzIGEgc2luZ2xlIHR5cGUgYXJndW1lbnRcbiAqIGBvZlR5cGU8VD4oJ3NvbWV0aGluZycpYCB0aGUgcmVzdWx0IGlzIGFuIGBPYnNlcnZhYmxlPFQ+YC4gTm90ZSwgdGhhdCBgVGBcbiAqIGNvbXBsZXRlbHkgb3ZlcnJpZGVzIGFueSBwb3NzaWJsZSBpbmZlcmVuY2UgZnJvbSAnc29tZXRoaW5nJy5cbiAqXG4gKiBVbmZvcnR1bmF0ZWx5LCBmb3IgdW5rbm93biAnYWN0aW9uczogQWN0aW9ucycgdGhlc2UgdHlwZXMgd2lsbCBwcm9kdWNlXG4gKiAnT2JzZXJ2YWJsZTxuZXZlcj4nLiBJbiBzdWNoIGNhc2VzIG9uZSBoYXMgdG8gbWFudWFsbHkgc2V0IHRoZSBnZW5lcmljIHR5cGVcbiAqIGxpa2UgYGFjdGlvbnMub2ZUeXBlPEFkZGl0aW9uQWN0aW9uPignYWRkJylgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFxuICBBQyBleHRlbmRzIEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPltdLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gUmV0dXJuVHlwZTxBQ1tudW1iZXJdPlxuPiguLi5hbGxvd2VkVHlwZXM6IEFDKTogT3BlcmF0b3JGdW5jdGlvbjxVLCBWPjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9mVHlwZTxcbiAgRSBleHRlbmRzIEV4dHJhY3Q8VSwgeyB0eXBlOiBUMSB9PixcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24sXG4gIFYgPSBUMSBleHRlbmRzIHN0cmluZyA/IEUgOiBSZXR1cm5UeXBlPEV4dHJhY3Q8VDEsIEFDPj5cbj4odDE6IFQxKTogT3BlcmF0b3JGdW5jdGlvbjxVLCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfCBUMiB9PixcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQyIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24sXG4gIFYgPSBBY3Rpb25FeHRyYWN0b3I8VDEgfCBUMiwgQUMsIEU+XG4+KHQxOiBUMSwgdDI6IFQyKTogT3BlcmF0b3JGdW5jdGlvbjxVLCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfCBUMiB8IFQzIH0+LFxuICBBQyBleHRlbmRzIEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPixcbiAgVDEgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDIgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVDMgZXh0ZW5kcyBzdHJpbmcgfCBBQyxcbiAgVSBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbixcbiAgViA9IEFjdGlvbkV4dHJhY3RvcjxUMSB8IFQyIHwgVDMsIEFDLCBFPlxuPih0MTogVDEsIHQyOiBUMiwgdDM6IFQzKTogT3BlcmF0b3JGdW5jdGlvbjxVLCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfCBUMiB8IFQzIHwgVDQgfT4sXG4gIEFDIGV4dGVuZHMgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+LFxuICBUMSBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMiBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUMyBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBUNCBleHRlbmRzIHN0cmluZyB8IEFDLFxuICBVIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uLFxuICBWID0gQWN0aW9uRXh0cmFjdG9yPFQxIHwgVDIgfCBUMyB8IFQ0LCBBQywgRT5cbj4odDE6IFQxLCB0MjogVDIsIHQzOiBUMywgdDQ6IFQ0KTogT3BlcmF0b3JGdW5jdGlvbjxVLCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGU8XG4gIEUgZXh0ZW5kcyBFeHRyYWN0PFUsIHsgdHlwZTogVDEgfCBUMiB8IFQzIHwgVDQgfCBUNSB9PixcbiAgQUMgZXh0ZW5kcyBBY3Rpb25DcmVhdG9yPHN0cmluZywgQ3JlYXRvcj4sXG4gIFQxIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQyIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQzIGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQ0IGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFQ1IGV4dGVuZHMgc3RyaW5nIHwgQUMsXG4gIFUgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24sXG4gIFYgPSBBY3Rpb25FeHRyYWN0b3I8VDEgfCBUMiB8IFQzIHwgVDQgfCBUNSwgQUMsIEU+XG4+KHQxOiBUMSwgdDI6IFQyLCB0MzogVDMsIHQ0OiBUNCwgdDU6IFQ1KTogT3BlcmF0b3JGdW5jdGlvbjxVLCBWPjtcbi8qKlxuICogRmFsbGJhY2sgZm9yIG1vcmUgdGhhbiA1IGFyZ3VtZW50cy5cbiAqIFRoZXJlIGlzIG5vIGluZmVyZW5jZSwgc28gdGhlIHJldHVybiB0eXBlIGlzIHRoZSBzYW1lIGFzIHRoZSBpbnB1dCAtXG4gKiBPYnNlcnZhYmxlPEFjdGlvbj4uXG4gKlxuICogV2UgcHJvdmlkZSBhIHR5cGUgcGFyYW1ldGVyLCBldmVuIHRob3VnaCBUUyB3aWxsIG5vdCBpbmZlciBpdCBmcm9tIHRoZVxuICogYXJndW1lbnRzLCB0byBwcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIG9sZCB2ZXJzaW9ucyBvZiBuZ3J4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZUeXBlPFYgZXh0ZW5kcyBBY3Rpb24+KFxuICAuLi5hbGxvd2VkVHlwZXM6IEFycmF5PHN0cmluZyB8IEFjdGlvbkNyZWF0b3I8c3RyaW5nLCBDcmVhdG9yPj5cbik6IE9wZXJhdG9yRnVuY3Rpb248QWN0aW9uLCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBvZlR5cGUoXG4gIC4uLmFsbG93ZWRUeXBlczogQXJyYXk8c3RyaW5nIHwgQWN0aW9uQ3JlYXRvcjxzdHJpbmcsIENyZWF0b3I+PlxuKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb24sIEFjdGlvbj4ge1xuICByZXR1cm4gZmlsdGVyKChhY3Rpb246IEFjdGlvbikgPT5cbiAgICBhbGxvd2VkVHlwZXMuc29tZSgodHlwZU9yQWN0aW9uQ3JlYXRvcikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBDb21wYXJpbmcgdGhlIHN0cmluZyB0byB0eXBlXG4gICAgICAgIHJldHVybiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSBhY3Rpb24udHlwZTtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgYXJlIGZpbHRlcmluZyBieSBBY3Rpb25DcmVhdG9yXG4gICAgICByZXR1cm4gdHlwZU9yQWN0aW9uQ3JlYXRvci50eXBlID09PSBhY3Rpb24udHlwZTtcbiAgICB9KVxuICApO1xufVxuIl19