/**
 * Title: Write a program using JavaScript on UserSlice
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 24, December 2023
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
  individual: {},
  admins: [],
  buyers: [],
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.auth = action.payload;
    },

    addIndividual: (state, action) => {
      state.individual = action.payload;
    },

    addAdmins: (state, action) => {
      state.admins = action.payload;
    },

    addBuyers: (state, action) => {
      state.buyers = action.payload;
    },
  },
});

export const { addAuth, addIndividual, addAdmins, addBuyers } =
  userSlice.actions;
export default userSlice.reducer;
