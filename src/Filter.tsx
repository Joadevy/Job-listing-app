import { type FC } from "react";

type props = {
  filter: string;
};

const Filter: FC<props> = ({ filter }) => {
  return (
    <div className="flex bg-neutral-200 border-2 rounded-lg border-none relative z-0">
      <div className="p-1 mr-7">{filter} </div>
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
  );
};

export default Filter;