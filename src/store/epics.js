import { ofType } from "redux-observable";
import { map, switchMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { catalogItemsFailure, catalogItemsRequest, catalogItemsSuccess, categoryIdSelect, topSalesFailure, topSalesRequest, topSalesSuccess } from "./slices";

const url = process.env.REACT_APP_BASE_URL;

export const topSalesEpic = action$ => action$.pipe(
    ofType(topSalesRequest.type),
    switchMap(() => ajax.getJSON(`${url}/top-sales`).pipe(
            map(res => topSalesSuccess(res)),
            catchError(error => of(topSalesFailure(error)))
        )
    )
);

export const catalogItemsEpic = (action$, state$) => action$.pipe(
    ofType(catalogItemsRequest.type, categoryIdSelect.type),
    switchMap(() => {
            const categoryId = state$.value.catalogItems.categoryId;
            const endpoint = categoryId ? `${url}/items?categoryId=${categoryId}` : `${url}/items`;
            return ajax.getJSON(endpoint).pipe(
                map(res => catalogItemsSuccess(res)),
                catchError(error => of(catalogItemsFailure(error)))
            )
        }
    )
);