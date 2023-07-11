import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AIRLINELOGIN, FORGOTAIRLINEPASSWORD } from "../../api/Api"
import { toast } from "react-toastify"

//AsyncThunk For Login 
export const fetchAirlineLogin = createAsyncThunk("/system/login/airline", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await AIRLINELOGIN(data);
        window.localStorage.setItem("token", JSON.stringify(result?.data?.token))
        window.localStorage.setItem("user", JSON.stringify(result?.data?.data))
        navigate('/airline');

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
export const forgotAirlinePassword = createAsyncThunk("/system/airline/forgot/password", async (email, { rejectWithValue }) => {
    try {
        const result = await FORGOTAIRLINEPASSWORD(email);
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
const AirlineAuthSlice = createSlice({
    name: "airlineAuthSlice",
    initialState: {
        user: null,
        token: "",
        status: "",
        error: null,
        loading: false,
        F_A_password_data: null
    },
    reducers: {
        clearAirlineAuthError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //States for Login
        builder.addCase(fetchAirlineLogin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(fetchAirlineLogin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.user = payload?.data?.data;
            state.token = payload?.data?.token;
        })
        builder.addCase(fetchAirlineLogin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })


        //States for forgotAirlinePassword
        builder.addCase(forgotAirlinePassword.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(forgotAirlinePassword.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.F_A_password_data = payload
        })
        builder.addCase(forgotAirlinePassword.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { clearAirlineAuthError } = AirlineAuthSlice.actions;
export default AirlineAuthSlice.reducer;