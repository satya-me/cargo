import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALLVENDOR, DELETEVENDOR, EDITVENDOR } from "../../api/Api";
import { toast } from "react-toastify";


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
}


// All Vendor
export const getAllVendor = createAsyncThunk("/all/vendor", async (payload, { rejectWithValue }) => {
    try {
        const result = await ALLVENDOR();
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

});


// Edit vendor
export const editVendor = createAsyncThunk("/vendor/update", async ({ vendor_id, data, navigate }, { rejectWithValue }) => {
    try {
        const result = await EDITVENDOR(vendor_id, data, header);
        navigate('/vendors');
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

});


// Delete Vendor 
export const deleteVendor = createAsyncThunk("/vendor/delete", async (id, { rejectWithValue }) => {
    try {
        const result = await DELETEVENDOR(id, header);
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


// Creating Slice
const VendorSlice = createSlice({
    name: "vendorSlice",
    initialState: {
        all_vendor_data: null,
        updated_vendor_data: null,
        deleted_vendor_data: null,
        status: null,
        loading: false,
        error: null
    },
    reducers: {
        clearDeletedVendorStatus(state) {
            state.deleted_vendor_data = null;
        }
    },
    extraReducers: (builder) => {
        //States for getAllVendor
        builder.addCase(getAllVendor.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(getAllVendor.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.all_vendor_data = payload;
            // store data in localStorage
            window.localStorage.setItem("all_vendor_data", JSON.stringify(payload?.data));
        })
        builder.addCase(getAllVendor.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for editVendor
        builder.addCase(editVendor.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(editVendor.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.updated_vendor_data = payload;
        })
        builder.addCase(editVendor.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for deleteVendor
        builder.addCase(deleteVendor.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(deleteVendor.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.deleted_vendor_data = payload;
        })
        builder.addCase(deleteVendor.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})


export const { clearDeletedVendorStatus } = VendorSlice.actions;
export default VendorSlice.reducer;