import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/ADMIN/AuthSlice";
import AirlineSlice from "../slices/ADMIN/AirlineSlice";
import UserSlice from "../slices/ADMIN/UserSlice";
import VendorSlice from "../slices/ADMIN/VendorSlice";
import AirlineAuthSlice from "../slices/AIRLINE/AirlineAuthSlice";
import VendorAirlineSlice from "../slices/AIRLINE/VendorAirlineSlice";
import VendorAuthSlice from "../slices/VENDOR/VendorAuthSlice";
import VendorCargoBookingSlice from "../slices/VENDOR/VendorCargoBookingSlice";

export const Store = configureStore({
    reducer: {
        // Admin
        authSlice: AuthSlice,
        airlineSlice: AirlineSlice,
        userSlice: UserSlice,
        vendorSlice: VendorSlice,
        // Airline
        airlineAuthSlice: AirlineAuthSlice,
        vendorAirlineSlice: VendorAirlineSlice,
        // vendor
        vendorAuthSlice: VendorAuthSlice,
        vendorCargoBookingSlice: VendorCargoBookingSlice
    }
});