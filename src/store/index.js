import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { catalogItemsEpic, loadMoreEpic, topSalesEpic } from "./epics";
import { catalogItemsSliceReducer, topSalesSliceReducer } from "./slices";

const epic = combineEpics(
    topSalesEpic,
    catalogItemsEpic,
    loadMoreEpic
);

const epicMiddleware = createEpicMiddleware();
const store = configureStore({
    reducer: {
        topSales: topSalesSliceReducer,
        catalogItems: catalogItemsSliceReducer
    },
    middleware: [epicMiddleware],
    devTools: process.env.NODE_ENV !== "production"
})

epicMiddleware.run(epic);

export default store;