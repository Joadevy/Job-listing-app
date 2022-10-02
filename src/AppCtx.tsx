import { createContext, SetStateAction } from "react";

import { type adProps } from "./types";

export type globalContext = {
  ads: adProps[];
  setAds: (_x: SetStateAction<adProps[]>) => void;
};

export const AppCtx = createContext<globalContext>({
  ads: [],
  setAds: () => {},
});
