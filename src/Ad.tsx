import { FC } from "react";

import { type adProps } from "./types";

interface Props {
  ad: adProps;
}

// eslint-disable-next-line no-undef
const Ad: FC<Props> = ({ ad }): JSX.Element => {
  const {
    id,
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
    <div className="p-10 relative shadow-md border-2 rounded-lg">
      <div className="w-14 h-14 absolute top-[-25px]">
        <img alt="" className="w-full" src={logo} />
      </div>
      <div className="flex flex-col gap-3">
        {featured ? (
          <div className="absolute top-0 left-0 h-full bg-primary-cyan w-2 z-[-10]" />
        ) : null}
        <div className="flex">
          <h2 className="font-bold text-primary-cyan">{company}</h2>
          {isNew ? (
            <span className="bg-primary-cyan text-white  font-bold rounded-full px-2 ml-4">
              NEW!
            </span>
          ) : null}
          {featured ? (
            <span className="bg-neutral-cyan-400 text-white text-center font-bold rounded-full px-2 ml-2">
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
        <hr className="border-1 border-neutral-cyan-300" />
      </div>
      <div className="flex gap-2 text-primary-cyan font-bold">
        {languages.map((language, index) => (
          <a key={index} className="bg-neutral-cyan-200" href="/">
            {language}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Ad;
