import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uuid } from "@/utils";
import * as work from "@/api/work";
import { SettingProps, ComponentNodeProps } from "@/types/component";

// First, create the thunk
export const fetchWork = createAsyncThunk("fetch/work", async (id: string) => {
  return await work.fetch(id);
});

interface WorkState {
  setting: SettingProps;
  currentId: string;
  components: ComponentNodeProps[];
  history: [];
  loading: boolean;
}

const initialState: WorkState = {
  setting: {
    title: "",
    desc: "",
    props: {},
  },
  currentId: "",
  components: [],
  history: [],
  loading: false,
};

// Then, handle actions in your reducers:
export const workSlice = createSlice({
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
      if (target) {
        Object.assign(target.props, payload);
      }
    },
    selectComponent: (state, action) => {
      state.currentId = action.payload;
    },
    updateSetting: (state, action) => {
      const { payload } = action;
      if (payload.props) {
        Object.assign(state.setting.props, payload.props);
      } else {
        Object.assign(state.setting, payload);
      }
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.includes("fetch/work"),
      (state, action: any) => {
        if (action.meta.requestStatus === "pending") {
          state.loading = true;
        } else {
          state.loading = false;
          if (action.meta.requestStatus === "fulfilled" && action.payload) {
            state.setting.title = action.payload.title || "";
            state.setting.desc = action.payload.desc || "";
            state.setting.props = action.payload?.content?.props || {};
            state.components = action.payload?.content?.components || [];
          }
        }
      }
    );
  },
});

export const { createComponent, updateComponent, selectComponent, updateSetting } =
  workSlice.actions;

export default workSlice.reducer;
