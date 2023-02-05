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
        categoryId: '',
        search: '',
        offset: 0,
        hasMore: true,
        loadMoreLoading: false
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
            state.offset = 0;
            state.hasMore = true;
        },
        changeSearchField(state, action) {
            const search = action.payload;
            state.search = search;
        },
        searchItemsRequest(state, action) {
            state.catalogItemsLoading = true;
            state.catalogItemsError = null;
        },
        searchItemsFailure(state, action) {
            state.loading = false;
            state.catalogItemsError = action.payload;
        },
        searchItemsSuccess(state, action) {
            state.catalogItems = action.payload;
            state.catalogItemsLoading = false;
            state.catalogItemsError = null;
        },
        loadMoreRequest(state, action) {
            state.loadMoreLoading = true
            state.offset += 6;
        },
        loadMoreSuccess(state, action) {
            const items = action.payload;
            state.catalogItems = [...state.catalogItems, ...items];
            state.loadMoreLoading = false;
            if(items.length < 6) {
                state.hasMore = false;
            }
        }
    }
})


export const { 
    topSalesRequest, 
    topSalesSuccess, 
    topSalesFailure 
} = topSalesSlice.actions;
export const topSalesSliceReducer = topSalesSlice.reducer;
export const { 
    catalogItemsRequest, 
    catalogItemsSuccess, 
    catalogItemsFailure, 
    categoryIdSelect, 
    changeSearchField,
    searchItemsRequest,
    searchItemsSuccess,
    searchItemsFailure, 
    loadMoreRequest, 
    loadMoreSuccess 
} = catalogItemsSlice.actions;
export const catalogItemsSliceReducer = catalogItemsSlice.reducer;