import type { Filter, adProps } from "./types";

import { useState, useEffect } from "react";

import { AppCtx } from "./AppCtx";
import Ad from "./Ad";

function commonElement(arr1: string[], arr2: string[]) {
  return arr2.every((value) => arr1.includes(value));
}

function App() {
  const [ads, setAds] = useState<adProps[]>([]);
  const [status, setStatus] = useState<"loading" | "success">("loading");
  const [filters, setFilters] = useState<Filter>({
    role: "",
    level: "",
    languages: [],
    tools: [],
  });

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("render");

  const requestData = async () => {
    await fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setAds(data);
        setStatus("success");
      });
  };

  if (status === "loading") return <div>loading...</div>;

  return (
    <div>
      <header className="bg-primary-cyan">
        <img alt="" src="assets/images/bg-header-mobile.svg" />
      </header>
      {filters.languages.length ||
      filters.tools.length ||
      filters.role ||
      filters.level ? (
        <div className="flex flex-wrap gap-4 m-5 p-6 bg-neutral-100 relative z-10 mt-[-25px] shadow-md rounded-lg">
          {filters.languages.map((filter) => (
            <div
              key={filter}
              className="flex bg-neutral-200 border-2 rounded-lg border-none relative z-0"
            >
              <div className="p-1 mr-7">{filter}</div>
              <button
                className="w-7 h-full bg-primary-cyan absolute right-0 z-[-5]"
                // onClick={() => setFilters(filters.filter((f) => f !== filter))}
                // onKeyDown={() =>
                //   setFilters(filters.filter((f) => f !== filter))
                // }
              >
                <img
                  alt=""
                  className="m-auto align-middle"
                  src="./assets/images/icon-remove.svg"
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <AppCtx.Provider value={{ filters, setFilters }}>
        <main className="flex flex-col gap-10 mx-5 my-14">
          {ads
            .filter((ad) => {
              const { role, level, languages, tools } = filters;

              return (
                ((ad.role === role || role === "") &&
                  (level === "" || ad.level === level) &&
                  (commonElement(ad.languages, languages) ||
                    languages.length === 0) &&
                  (tools.length === 0 || commonElement(ad.tools, tools))) ||
                (role === "" &&
                  level === "" &&
                  languages.length === 0 &&
                  tools.length === 0)
              );
            })
            .map((ad: adProps) => (
              <Ad key={ad.id} ad={ad} />
            ))}
        </main>
      </AppCtx.Provider>
    </div>
  );
}

export default App;
