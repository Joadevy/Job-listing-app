import { useState, useEffect } from "react";

import Ad from "./Ad";
import { type adProps } from "./types";

function App() {
  const [ads, setAds] = useState<adProps[]>([]);
  const [status, setStatus] = useState<"loading" | "success">("loading");
  const [filters, setFilters] = useState<Map<string, string | string[]>>(
    () => new Map()
  );
  // const [filters, setFilters] = useState({
  // role: "",
  // level: "",
  // languages: [],
  // tools: [],
  // });

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Codigo cuando cambia el estado de filters, debe filtrar los ads
  }, [filters]);

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
      {/* {filters.length ? (
        <div className="flex flex-wrap gap-4 m-5 p-6 bg-neutral-100 relative z-10 mt-[-25px] shadow-md rounded-lg">
          {filters.map((filter) => (
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
      )} */}
      <main className="flex flex-col gap-10 mx-5 my-14">
        {ads?.map((ad: adProps) => (
          <Ad key={ad.id} ad={ad} />
        ))}
      </main>
    </div>
  );
}

export default App;
