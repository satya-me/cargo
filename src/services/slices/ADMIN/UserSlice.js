import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALLADMIN, DELETEADMIN, EDITADMIN } from "../../api/Api";
import { toast } from "react-toastify";


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
}


// All admin
export const getAllAdmin = createAsyncThunk("/all/admin", async (payload, { rejectWithValue }) => {
    try {
        const result = await ALLADMIN();
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

});


// Edit admin
export const editAdmin = createAsyncThunk("/admin/update", async ({ user_id, data, navigate }, { rejectWithValue }) => {
    try {
        const result = await EDITADMIN(user_id, data, header);
        navigate('/users');
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

});


// Delete admin 
export const deleteAdmin = createAsyncThunk("/admin/delete", async (id, { rejectWithValue }) => {
    try {
        const result = await DELETEADMIN(id, header);
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
const UserSlice = createSlice({
    name: "userSlice",
    initialState: {
        all_admin_data: null,
        updated_admin_data: null,
        deleted_admin_data: null,
        status: null,
        loading: false,
        error: null
    },
    reducers: {
        clearDeletedAdminStatus(state) {
            state.deleted_admin_data = null;
        }
    },
    extraReducers: (builder) => {
        //States for getAllAdmin
        builder.addCase(getAllAdmin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(getAllAdmin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.all_admin_data = payload;
            // store data in localStorage
            window.localStorage.setItem("all_admin_data", JSON.stringify(payload?.data));
        })
        builder.addCase(getAllAdmin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for editAdmin
        builder.addCase(editAdmin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(editAdmin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.updated_admin_data = payload;
        })
        builder.addCase(editAdmin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for deleteAdmin
        builder.addCase(deleteAdmin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(deleteAdmin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.deleted_admin_data = payload;
        })
        builder.addCase(deleteAdmin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})


export const { clearDeletedAdminStatus } = UserSlice.actions;
export default UserSlice.reducer;