import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { VENDORFORGOTPASSWORD, VENDORLOGIN } from "../../api/Api"
import { toast } from "react-toastify"

//AsyncThunk For Login 
export const fetchVendorLogin = createAsyncThunk("/auth/login", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await VENDORLOGIN(data);
        window.localStorage.setItem("token", JSON.stringify(result?.data?.token))
        window.localStorage.setItem("user", JSON.stringify(result?.data?.data))
        navigate('/vendor');

        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


//AsyncThunk For forgot password 
export const forgotVendorPassword = createAsyncThunk("/vendor/forgot/password", async (email, { rejectWithValue }) => {
    try {
        const result = await VENDORFORGOTPASSWORD(email);
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
const VendorAuthSlice = createSlice({
    name: "vendorAuthSlice",
    initialState: {
        user: null,
        token: "",
        status: "",
        error: null,
        loading: false,
        F_V_password_data: null
    },
    reducers: {
        clearVendorAuthError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //States for Login
        builder.addCase(fetchVendorLogin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(fetchVendorLogin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.user = payload?.data?.data;
            state.token = payload?.data?.token;
        })
        builder.addCase(fetchVendorLogin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for forgotVendorPassword
        builder.addCase(forgotVendorPassword.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(forgotVendorPassword.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.F_V_password_data = payload;
        })
        builder.addCase(forgotVendorPassword.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { clearVendorAuthError } = VendorAuthSlice.actions;
export default VendorAuthSlice.reducer;