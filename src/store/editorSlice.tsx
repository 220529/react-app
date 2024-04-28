import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uuid } from "@/utils";
import * as work from "@/api/work";
import { ComponentProps } from "@/types/component";

// First, create the thunk
export const fetchWork = createAsyncThunk("fetch/work", async (id: string) => {
  return await work.fetch(id);
});

interface EditorState {
  currentId: string;
  components: ComponentProps[];
  history: [];
  work: work.WorkProps;
  workLoading: boolean;
}

const initialState: EditorState = {
  currentId: "",
  components: [],
  history: [],
  work: {},
  workLoading: false,
};

// Then, handle actions in your reducers:
export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    createComponent: (state, action) => {
      state.components.push({
        id: uuid(),
        layerName: "图层" + (state.components.length + 1),
        ...action.payload,
      });
    },
    updateComponent: (state, action) => {
      const { payload } = action;
      const target = state.components.find(item => item.id === (payload.id || state.currentId));
      if (target && payload.property) {
        Object.assign(target.props, payload.property);
      }
    },
    selectComponent: (state, action) => {
      state.currentId = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.includes("fetch/work"),
      (state, action: any) => {
        if (action.meta.requestStatus === "pending") {
          state.workLoading = true;
        } else {
          state.workLoading = false;
          if (action.meta.requestStatus === "fulfilled" && action.payload) {
            state.work = action.payload;
            state.components = action.payload?.content?.components || [];
          }
        }
      }
    );
  },
});

export const { createComponent, updateComponent, selectComponent } = editorSlice.actions;

export default editorSlice.reducer;
