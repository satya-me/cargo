import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ADDUSER, FORGOTPASSWORD, LOGIN } from "../../api/Api"
import { toast } from "react-toastify"

//AsyncThunk For Login 
export const fetchLogin = createAsyncThunk("/auth/login", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await LOGIN(data);
        window.localStorage.setItem("token", JSON.stringify(result?.data?.token))
        window.localStorage.setItem("user", JSON.stringify(result?.data?.data))
        navigate('/admin');

        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


//AsyncThunk For addUser 
export const addUser = createAsyncThunk("/auth/signup", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await ADDUSER(data);
        navigate('/users');

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
export const forgotPassword = createAsyncThunk("/admin/auth/forgot/password", async (email, { rejectWithValue }) => {
    try {
        const result = await FORGOTPASSWORD(email);
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
const AuthSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: null,
        add_user_data: null,
        forgot_password_data: null,
        token: "",
        status: "",
        error: null,
        loading: false
    },
    reducers: {
        // Logout reducer
        doLogOut: (state) => {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            state.user = null;
            state.token = "";
            toast.success("Logged Out Successfully", {
                autoClose: 3500
            })
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //States for Login
        builder.addCase(fetchLogin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.user = payload?.data?.data;
            state.token = payload?.data?.token;
        })
        builder.addCase(fetchLogin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for addUser
        builder.addCase(addUser.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(addUser.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.add_user_data = payload
        })
        builder.addCase(addUser.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for forgotPassword
        builder.addCase(forgotPassword.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.forgot_password_data = payload
        })
        builder.addCase(forgotPassword.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { doLogOut, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;