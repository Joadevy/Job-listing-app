import type { adProps } from "./types";

import { useState, useEffect } from "react";

import Ad from "./Ad";
import Filter from "./Filter";

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

  const handleRemoveFilter = (filter: string) => {
    filters.delete(filter);
    setFilters(new Set(filters));
  };

  const handleFilter = () => {
    if (filters.size === 0) {
      return ads;
    }

    return ads.filter((ad) => {
      const { role, level, languages, tools } = ad;
      const tags = [role, level, ...languages, ...tools];

      return filters.size === tags.filter((tag) => filters.has(tag)).length;
    });
  };

  const handleClear = () => {
    setFilters(new Set());
  };

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div>
      <header className="h-32 bg-primary-cyan bg-hero-mobile-pattern lg:h-40 lg:bg-hero-desktop-pattern" />

      {filters.size ? (
        <div className="flex mx-5 justify-between bg-neutral-100 relative z-10 mt-[-25px] shadow-md rounded-lg lg:mx-40  ease-out">
          <div className="flex flex-wrap gap-4 m-5">
            {Array.from(filters).map((filter) => (
              <Filter
                key={filter}
                filter={filter}
                removeFilter={handleRemoveFilter}
              />
            ))}
          </div>
          <button
            className="text-primary-cyan text-lg hover:underline m-5"
            onClick={handleClear}
            onKeyPress={handleClear}
          >
            Clear
          </button>
        </div>
      ) : null}

      <main className="flex flex-col gap-10 mx-5 my-14 lg:mx-40">
        {handleFilter().map((ad: adProps) => (
          <Ad key={ad.id} ad={ad} setFilter={handleAddFilter} />
        ))}
      </main>
    </div>
  );
}

export default App;
