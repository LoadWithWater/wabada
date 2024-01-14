import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { State, User } from "./types.ts";

const INITIAL_STATE: State = {
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {

			state.user = action.payload;

		},
	},
});
