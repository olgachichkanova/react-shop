import { createSlice } from "@reduxjs/toolkit";

const topSalesSlice = createSlice({
    name: "topSales",
    initialState: {
        topSales: [],
        topSalesLoading: false,
        topSalesError: null
    },
    reducers: {
        topSalesRequest(state, action) {
            state.topSalesLoading = true;
            state.topSalesError = null;
        },
        topSalesSuccess(state, action) {
            state.topSales = action.payload;
            state.topSalesLoading = false;
            state.topSalesError = null;
        },
        topSalesFailure(state, action) {
            state.topSalesLoading = false;
            state.topSalesError = action.payload;
        }
    }
})

const catalogItemsSlice = createSlice({
    name: "catalogItems",
    initialState: {
        catalogItems: [],
        catalogItemsLoading: false,
        catalogItemsError: null,
        categoryId: ''
    },
    reducers: {
        catalogItemsRequest(state, action) {
            state.catalogItemsLoading = true;
            state.catalogItemsError = null;
        },
        catalogItemsSuccess(state, action) {
            state.catalogItems = action.payload;
            state.catalogItemsLoading = false;
            state.catalogItemsError = null;
        },
        catalogItemsFailure(state, action) {
            state.catalogItemsLoading = false;
            state.catalogItemsError = action.payload;
        },
        categoryIdSelect(state, action) {
            const id = action.payload;
            state.categoryId = id;
        }
    }
})


export const { topSalesRequest, topSalesSuccess, topSalesFailure } = topSalesSlice.actions;
export const topSalesSliceReducer = topSalesSlice.reducer;
export const { catalogItemsRequest, catalogItemsSuccess, catalogItemsFailure, categoryIdSelect } = catalogItemsSlice.actions;
export const catalogItemsSliceReducer = catalogItemsSlice.reducer;