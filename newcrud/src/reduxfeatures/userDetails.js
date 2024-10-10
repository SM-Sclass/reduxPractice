import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser= createAsyncThunk("createUser", async(data,{rejectWithValue})=>{
    const response = await fetch("https://6706a1aea0e04071d227ae5c.mockapi.io/crud",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result =  await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error);
    }
})

export const showUsers= createAsyncThunk("showUsers", async()=>{
    console.log("Enter")
    const response = await fetch("https://6706a1aea0e04071d227ae5c.mockapi.io/crud"
    //     ,{
    //     method:"GET",
    //     headers:{
    //         "Content-Type":"application/json",
    //     },
    // }
);
    console.log("out")
    try {
        const result =  await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        return error;
    }
})

export const allUsers = createAsyncThunk("allUsers", async({rejectWithValue})=>{
    console.log("Enter")
    const response = await fetch("https://6706a1aea0e04071d227ae5c.mockapi.io/crud");
    console.log("out")
    try {
        const result =  await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error);
    }
})

const userDetail = createSlice({
    name:"userDetail",
    initialState: {
        users: [],
        loading:false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(createUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
          })
          .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Use `action.payload` to get the error from rejectWithValue
          })
          .addCase(allUsers.pending, (state) => {
                state.loading = true;
            })
          .addCase(allUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
          .addCase(allUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use `action.payload` to get the error from rejectWithValue
            });
      },
});

export default userDetail.reducer;