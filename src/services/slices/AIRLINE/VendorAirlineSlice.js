import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ADDVENDOR } from "../../api/Api";

// Add Airlines 
export const addVendor = createAsyncThunk("/vendor/auth/signup", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await ADDVENDOR(data);
        navigate('/vendors')
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 6000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})

// Creating Slice
const VendorAirlineSlice = createSlice({
    name: "vendorAirlineSlice",
    initialState: {
        add_vendor_data: null,
        status: null,
        loading: false,
        error: null
    },
    reducers: {
        clearAddVendorError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //States for addVendor
        builder.addCase(addVendor.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(addVendor.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.add_vendor_data = payload
        })
        builder.addCase(addVendor.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})


export const { clearAddVendorError } = VendorAirlineSlice.actions;
export default VendorAirlineSlice.reducer;