import type { adProps } from "./types";

import { useState, useEffect } from "react";

// import { AppCtx } from "./AppCtx";
import Ad from "./Ad";
import Filter from "./Filter";

function commonElement(arr1: string[], arr2: string[]) {
  return arr2.every((value) => arr1.includes(value));
}

function App() {
  const [ads, setAds] = useState<adProps[]>([]);
  const [status, setStatus] = useState<"loading" | "success">("loading");
  const [filters, setFilters] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const requestData = async () => {
    await fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setAds(data);
        setStatus("success");
      });
  };

  const handleAddFilter = (filter: string) => {
    // Avoid no sense re-renders
    if (!filters.has(filter)) {
      setFilters((prev) => new Set(prev.add(filter)));
    }
  };

  if (status === "loading") return <div>loading...</div>;
  console.log("render");

  return (
    <div>
      <header className="bg-primary-cyan">
        <img alt="" src="assets/images/bg-header-mobile.svg" />
      </header>

      {filters.size ? (
        <div className="flex flex-wrap gap-4 m-5 p-6 bg-neutral-100 relative z-10 mt-[-25px] shadow-md rounded-lg">
          {Array.from(filters).map((filter) => (
            <Filter key={filter} filter={filter} />
          ))}
        </div>
      ) : null}

      <main className="flex flex-col gap-10 mx-5 my-14">
        {ads.map((ad: adProps) => (
          <Ad key={ad.id} ad={ad} setFilter={handleAddFilter} />
        ))}
      </main>
    </div>
  );
}

export default App;
