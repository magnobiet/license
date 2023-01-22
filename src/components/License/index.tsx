import { FC, ReactElement } from 'react';
import {
  CC0License,
  Copyright,
  CopyrightProperties,
  ISCLicense,
  MITLicense,
} from '~/components';
import { License as LicenseEnum } from '~/enums';

type LicenseProperties = {
  type: LicenseEnum;
} & CopyrightProperties;

export const License: FC<LicenseProperties> = ({
  type,
  ...copyrightProperties
}) => {
  const licenses: {
    [key: string]: {
      title: ReactElement;
      component: ReactElement;
    };
  } = {
    mit: {
      title: (
        <>
          The MIT License <span className="block">(MIT)</span>
        </>
      ),
      component: <MITLicense />,
    },
    isc: {
      title: (
        <>
          <span className="block">(ISC)</span>
        </>
      ),

      component: <ISCLicense />,
    },
    cc0: {
      title: (
        <>
          CC0 1.0 Universal <span className="block">(CC0 1.0)</span>
        </>
      ),
      component: <CC0License />,
    },
  };

  return (
    <article className="m-auto max-w-3xl p-8 bg-slate-700/20 rounded-xl">
      <header>
        <h1 className="text-7xl font-extrabold mb-6">{licenses[type].title}</h1>

        {type !== LicenseEnum.CC0.toLowerCase() ? (
          <Copyright {...copyrightProperties} />
        ) : null}
      </header>
      <main className="mt-6 flex flex-col gap-2">
        {licenses[type].component}
      </main>
    </article>
  );
};
