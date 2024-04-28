import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uuid } from "@/utils";
import { ComponentProps } from "@/types/component";
// import { fetchById, UserProps } from "@/api/user";
import { defaultTextComponentProps, UpdateComponentProps } from "@/types/component";

// First, create the thunk
export const fetchUserById = createAsyncThunk("user/fetchByIdStatus", async (userId: number) => {
  // const response = await fetchById(userId);
  // return response.content;
});

interface EditorState {
  currentId: string;
  components: ComponentProps[];
  history: [];
}

const initialState: EditorState = {
  currentId: "",
  components: [
    {
      id: uuid(),
      name: "l-text",
      layerName: "图层1",
      props: {
        ...defaultTextComponentProps,
        text: "111",
        fontSize: "20px",
        color: "#000000",
        lineHeight: "1",
        textAlign: "left",
        fontFamily: "",
        width: "100px",
        height: "100px",
        backgroundColor: "#efefef",
        // left: "100px",
        // top: "150px",
      },
    },
  ],
  history: [],
};

// Then, handle actions in your reducers:
export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    createComponent: (state, action) => {
      state.components.push(action.payload);
    },
    updateComponent: (state, action) => {
      const { payload } = action;
      const target = state.components.find(item => item.id === payload.id || state.currentId);
      if (target && payload.property) {
        Object.assign(target.props, payload.property);
      }
    },
    selectComponent: (state, action) => {
      state.currentId = action.payload;
    },
  },
});

export const { createComponent, updateComponent, selectComponent } = editorSlice.actions;

export default editorSlice.reducer;
