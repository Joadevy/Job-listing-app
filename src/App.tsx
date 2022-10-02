import { useState, useEffect } from "react";

import Ad from "./Ad";
import { type adProps } from "./types";
import { AppCtx } from "./AppCtx";

function App() {
  const [ads, setAds] = useState<adProps[]>([]);
  const [status, setStatus] = useState<"loading" | "success">("loading");

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAds(data));
    setStatus("success");
  }, []);

  if (status === "loading") return <div>loading...</div>;

  return (
    <div>
      <header className="bg-primary-cyan">
        <img alt="" src="assets/images/bg-header-mobile.svg" />
      </header>
      <AppCtx.Provider value={{ ads, setAds }}>
        <main className="flex flex-col gap-10 mx-5 my-14">
          {ads?.map((ad: adProps) => (
            <Ad key={ad.id} ad={ad} />
          ))}
        </main>
      </AppCtx.Provider>
    </div>
  );
}

export default App;
