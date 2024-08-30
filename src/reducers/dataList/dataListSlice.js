import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest/axiosRequest";

export const getProducts = createAsyncThunk(
  "dataList/getProducts",
  async () => {
    try {
      const { data } = await axiosRequest.get("Product/get-products");
      return data?.data?.products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getProductsColor = createAsyncThunk(
  "dataList/getProductsColor",
  async () => {
    try {
      const { data } = await axiosRequest.get("Product/get-products");
      return data?.data?.colors;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getProductsBrands = createAsyncThunk(
  "dataList/getProductsBrands",
  async () => {
    try {
      const { data } = await axiosRequest.get("Product/get-products");
      return data?.data?.brands;
    } catch (error) {
      console.error(error);
    }
  }
);
export const addToCart = createAsyncThunk(
  "dataList/addToCart",
  async (productId, { dispatch }) => {
    try {
      const { data } = await axiosRequest.post(
        "Cart/add-product-to-cart?id=" + productId
      );
      dispatch(getProducts());
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCategory = createAsyncThunk(
  "dataList/getCategory",
  async () => {
    try {
      const { data } = await axiosRequest.get("Category/get-categories");
      return data?.data;
    } catch (error) {
      console.error(error);
    }
  }
)


export const getCategoryById = createAsyncThunk(
  "dataList/getCategoryById",
  async (id) => {
    try {
      const { data } = await axiosRequest.get("Category/get-category-by-id?id=" + id);
      return data?.data;
    } catch (error) {
      console.error(error);
    }
  }
)

export const getSubCategoryById = createAsyncThunk(
  "dataList/getSubCategoryById",
  async (id) => {
    try {
      const { data } = await axiosRequest.get("SubCategory/get-sub-category-by-id?id=" + id);
      return data?.data;
    } catch (error) {
      console.error(error);
    }
  }
)

export const getProfile = createAsyncThunk(
  "dataList/getProfile",
  async (id) => {
    try {
      const { data } = await axiosRequest.get("UserProfile/get-user-profile-by-id?id=" + id);
      return data?.data;
    } catch (error) {
      console.error(error);
    }
  }
)


// Filters

export const getFilterCategory = createAsyncThunk(
  "dataList/getFilterCategory",
  async (id) => {
    try {
      const { data } = await axiosRequest.get("Product/get-products?CategoryId=" + id);
      return data?.data?.products;
    } catch (error) {
      console.error(error);
    }
  }
)

export const getFilterBrand = createAsyncThunk(
  "dataList/getFilterBrand",
  async (id) => {
    try {
      const { data } = await axiosRequest.get("Product/get-products?BrandId=" + id);
      return data?.data?.products;
    } catch (error) {
      console.error(error);
    }
  }
)

export const getFilterColor = createAsyncThunk(
  "dataList/getFilterColor",
  async (id) => {
    try {
      const { data } = await axiosRequest.get("Product/get-products?ColorId=" + id);
      return data?.data?.products;
    } catch (error) {
      console.error(error);
    }
  }
)

export const getFilterPrice = createAsyncThunk(
  "dataList/getFilterPrice",
  async (price) => {
    try {
      const { data } = await axiosRequest.get("Product/get-products?MinPrice=" + price);
      return data?.data?.products;
    } catch (error) {
      console.error(error);
    }
  }
)

export const dataListSlice = createSlice({
  name: "dataList",
  initialState: {
    data: [],
    categories: [],
    profile: [],
    categoryById: [],
    subCategoryById: [],
    colors: [],
    brands: [],
    filterCategory: [],
    filterBrand: [],
    filterColor: [],
    filterPrice: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProductsColor.fulfilled, (state, action) => {
      state.colors = action.payload;
    });
    builder.addCase(getProductsBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.categoryById = action.payload;
    });
    builder.addCase(getSubCategoryById.fulfilled, (state, action) => {
      state.subCategoryById = action.payload;
    });
    builder.addCase(getFilterCategory.fulfilled, (state, action) => {
      state.filterCategory = action.payload;
    });
    builder.addCase(getFilterBrand.fulfilled, (state, action) => {
      state.filterBrand = action.payload;
    });
    builder.addCase(getFilterColor.fulfilled, (state, action) => {
      state.filterColor = action.payload;
    });
    builder.addCase(getFilterPrice.fulfilled, (state, action) => {
      state.filterPrice = action.payload;
    });
  },
});

export const {} = dataListSlice.actions;

export default dataListSlice.reducer;