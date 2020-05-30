import regionData from "~/assets/json/region.json";

// 状態管理
export const state = () => ({
  data: regionData
});

// getters
export const getters = {
  getRegion: state => {
    return state.data;
  }
};
