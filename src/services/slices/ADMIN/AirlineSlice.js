import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ADDAIRLINE, ALLAIRLINE, DELETEAIRLINE, EDITAIRLINE } from "../../api/Api"
import { toast } from "react-toastify"


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
}

// Add Airlines 
export const addAirlines = createAsyncThunk("/add/airline", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await ADDAIRLINE(data);
        navigate('/airlines');
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 6000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


// All Airlines 
export const getAllAirlines = createAsyncThunk("/all/airline", async (payload, { rejectWithValue }) => {
    try {
        const result = await ALLAIRLINE();
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


// Edit Airlines 
export const editAirlines = createAsyncThunk("/update/airline", async ({ airline_id, data, navigate }, { rejectWithValue }) => {
    try {
        const result = await EDITAIRLINE(airline_id, data, header);
        navigate('/airlines');
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


// Delete Airlines 
export const deleteAirlines = createAsyncThunk("/delete/airline", async (id, { rejectWithValue }) => {
    try {
        const result = await DELETEAIRLINE(id, header);
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
    name: "airlineSlice",
    initialState: {
        add_airline_data: null,
        airline_data: null,
        updated_airline_data: null,
        deleted_airline_data: null,
        status: null,
        loading: false,
        error: null
    },
    reducers: {
        clearDeletedDataStatus(state) {
            state.deleted_airline_data = null;
        },
        clearAddAirlineError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        //States for addAirlines
        builder.addCase(addAirlines.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(addAirlines.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.add_airline_data = payload
        })
        builder.addCase(addAirlines.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })


        //States for getAllAirlines
        builder.addCase(getAllAirlines.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(getAllAirlines.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.airline_data = payload;
            // store data in localStorage
            window.localStorage.setItem("airline_data", JSON.stringify(payload?.data));
        })
        builder.addCase(getAllAirlines.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })


        //States for editAirlines
        builder.addCase(editAirlines.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(editAirlines.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.updated_airline_data = payload;
        })
        builder.addCase(editAirlines.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })


        //States for deleteAirlines
        builder.addCase(deleteAirlines.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(deleteAirlines.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.deleted_airline_data = payload;
        })
        builder.addCase(deleteAirlines.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})


export const { clearDeletedDataStatus, clearAddAirlineError } = AuthSlice.actions;
export default AuthSlice.reducer;