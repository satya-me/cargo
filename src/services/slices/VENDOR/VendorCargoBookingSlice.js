// VendorCargoBookingSlice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { DELETEBOOKING, DELETEFILE, GETALLBOOKINGS, TAKEBOOKING, UPDATEBOOKING } from "../../api/Api"
import { toast } from "react-toastify"


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
}


//AsyncThunk For cargoBooking 
export const takeCargoBooking = createAsyncThunk("/take/booking", async (data, { rejectWithValue }) => {
    try {
        const result = await TAKEBOOKING(data, header);
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

});


//AsyncThunk For getAllBookingData 
export const getAllBookingData = createAsyncThunk("/all/booking", async (payload, { rejectWithValue }) => {
    try {
        const result = await GETALLBOOKINGS();
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


//AsyncThunk For getAllBookingData 
export const updateBookingData = createAsyncThunk("/update/booking/", async ({ booking_id, data, navigate }, { rejectWithValue }) => {
    try {
        const result = await UPDATEBOOKING(booking_id, data, header);
        navigate('/viewbooking');
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 3000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


//AsyncThunk For deleteBookingData 
export const deleteBookingData = createAsyncThunk("/delete/booking/", async (id, { rejectWithValue }) => {
    try {
        const result = await DELETEBOOKING(id, header);
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


//AsyncThunk For deleteBookingData 
export const fileDelete = createAsyncThunk("/delete/file", async (body, { rejectWithValue }) => {
    try {
        await DELETEFILE(body);
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})


// Creating Slice
const VendorCargoBookingSlice = createSlice({
    name: "vendorCargoBookingSlice",
    initialState: {
        create_booking_stat: null,
        all_booking_data: null,
        delete_booking_status: null,
        updated_booking_data: null,
        status: "",
        error: null,
        loading: false,
    },
    reducers: {
        clearCreateBookingStatus(state) {
            state.create_booking_stat = null;
        },
        clearDeleteBookingStatus(state) {
            state.delete_booking_status = null;
        }
    },
    extraReducers: (builder) => {
        //States for takeCargoBooking
        builder.addCase(takeCargoBooking.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(takeCargoBooking.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.create_booking_stat = payload;
        })
        builder.addCase(takeCargoBooking.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for getAllBookingData
        builder.addCase(getAllBookingData.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(getAllBookingData.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.all_booking_data = payload;
            window.localStorage.setItem("all_booking_data", JSON.stringify(payload?.data));
        })
        builder.addCase(getAllBookingData.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for deleteBookingData
        builder.addCase(updateBookingData.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(updateBookingData.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.updated_booking_data = payload;
        })
        builder.addCase(updateBookingData.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for deleteBookingData
        builder.addCase(deleteBookingData.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(deleteBookingData.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.delete_booking_status = payload;
        })
        builder.addCase(deleteBookingData.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { clearCreateBookingStatus, clearDeleteBookingStatus } = VendorCargoBookingSlice.actions;
export default VendorCargoBookingSlice.reducer;