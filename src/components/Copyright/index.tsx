import { FC } from 'react';

type Holder = {
  name: string;
  email: string;
  url?: string;
};

export type CopyrightProperties = {
  holder: Holder;
  year?: number;
};

export const Copyright: FC<CopyrightProperties> = ({ holder, year }) => {
  const currentYear = new Date().getFullYear();
  const isPastYear = year && year !== currentYear && year < currentYear;

  const nameWithUrl = (
    <>
      <a
        href={holder.url}
        target="_blank"
        rel="noreferrer"
        className="hover:underline focus:underline"
      >
        {holder.name}, {holder.url}
      </a>
    </>
  );

  return (
    <p className="mt-10">
      Copyright © {isPastYear ? `${year}-${currentYear}` : currentYear}{' '}
      {holder.url ? nameWithUrl : holder.name}
      {` <`}
      <a
        href={`mailto:${holder.email}`}
        className="hover:underline focus:underline"
      >{`${holder.email}`}</a>
      {`>`}
    </p>
  );
};
