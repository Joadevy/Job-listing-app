import { FC } from "react";

import { type adProps } from "./types";

interface Props {
  ad: adProps;
  setFilter: (_x: string) => void;
}

// eslint-disable-next-line no-undef
const Ad: FC<Props> = ({ ad, setFilter }): JSX.Element => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = ad;

  return (
    <div className="px-10 pt-10 pb-5 relative shadow-md border-2 rounded-lg text-lg lg:items-center lg:flex lg:gap-5">
      <div className="w-14 h-14 absolute top-[-25px] lg:w-24 lg:h-24 lg:relative lg:top-0">
        <img alt="" className="w-full" src={logo} />
      </div>
      <div className="flex flex-col gap-4">
        {featured ? (
          <div className="absolute top-0 left-0 h-full bg-primary-cyan w-2 z-[-10]" />
        ) : null}
        <div className="flex items-center">
          <h2 className="font-bold text-primary-cyan">{company}</h2>
          {isNew ? (
            <span className="bg-primary-cyan text-white text-center font-bold text-base rounded-full px-2 ml-4">
              NEW!
            </span>
          ) : null}
          {featured ? (
            <span className="bg-neutral-cyan-400 text-white text-center text-base font-bold rounded-full px-2 ml-2">
              FEATURED
            </span>
          ) : null}
        </div>

        <h1>{position}</h1>

        <ul className="flex gap-6 text-neutral-cyan-300">
          <li className="">{postedAt}</li>
          <li className="list-disc">{contract}</li>
          <li className="list-disc">{location}</li>
        </ul>

        <hr className="border-1 border-neutral-cyan-300 lg:hidden" />

        <div className="flex gap-3 flex-wrap text-primary-cyan font-bold lg:absolute lg:right-0 lg:top-1/2 lg:mx-4">
          <button
            className="bg-neutral-cyan-200 p-2 rounded-full"
            onClick={() => setFilter(role)}
            onKeyPress={() => setFilter(role)}
          >
            {role}
          </button>
          <button
            className="bg-neutral-cyan-200 p-2 rounded-full"
            onClick={() => setFilter(level)}
            onKeyPress={() => setFilter(level)}
          >
            {level}
          </button>
          {languages?.map((language, index) => (
            <button
              key={index}
              className="bg-neutral-cyan-200 p-2 rounded-full"
              onClick={() => setFilter(language)}
              onKeyPress={() => setFilter(language)}
            >
              {language}
            </button>
          ))}
          {tools.map((tool) => (
            <button
              key={tool}
              className="bg-neutral-cyan-200 p-2 rounded-full"
              onClick={() => setFilter(tool)}
              onKeyPress={() => setFilter(tool)}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ad;
