import { createContext, SetStateAction } from "react";

import { type Filter } from "./types";

export type globalContext = {
  // ads: adProps[];
  // setAds: (_x: SetStateAction<adProps[]>) => void;
  filters: Filter;
  setFilters: (_x: SetStateAction<Filter>) => void;
};

export const AppCtx = createContext<globalContext>({
  // ads: [],
  // setAds: () => {},
  filters: { role: "", level: "", languages: [], tools: [] },
  setFilters: () => {},
});
