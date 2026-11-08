import { create } from "zustand";
type ArenaState = {
  motion: boolean;
  low: boolean;
  entered: boolean;
  sceneReady: boolean;
  retired: boolean;
  active: string;
  technique: number;
  running: boolean;
  speed: number;
  tour: number;
  set: (v: Partial<Omit<ArenaState, "set">>) => void;
};
export const useArena = create<ArenaState>((set) => ({
  motion: true,
  low: false,
  entered: false,
  sceneReady: false,
  retired: false,
  active: "arrival",
  technique: 0,
  running: true,
  speed: 1,
  tour: 0,
  set,
}));
export const chapters = [
  ["arrival", "進場"],
  ["arena", "擂台"],
  ["training", "訓練"],
  ["technique", "技術"],
  ["coaches", "教練"],
  ["transformation", "蛻變"],
  ["records", "紀錄"],
  ["community", "團隊"],
  ["begin", "開始"],
];
export const techniques = [
  ["JAB", "前手直拳", "從站架出發 練習出拳與回位"],
  ["CROSS", "後手直拳", "讓身體轉動與出拳連在一起"],
  ["HOOK", "勾拳", "認識近距離拳法的動作路徑"],
  ["LOW KICK", "低掃腿", "觀察轉身與腿部移動的節奏"],
  ["KNEE", "膝擊", "認識提膝與重心轉移"],
  ["ELBOW", "肘擊", "觀察近距離肘部移動"],
];
