import { FC, ReactElement } from 'react';
import { GoLaw } from 'react-icons/go';
import {
  CC0License,
  Copyright,
  CopyrightProperties,
  ISCLicense,
  MITLicense,
} from '~/components';
import { License as LicenseEnum } from '~/enums';
import { GenericKeys } from '~/types';
import { getLicenseTitle, isValidLicense } from '~/utililies';

type LicenseProperties = {
  type: LicenseEnum;
} & CopyrightProperties;

const canShowCopyright = (type: LicenseEnum) => {
  return type !== LicenseEnum.CC0.toLowerCase();
};

export const License: FC<LicenseProperties> = ({
  type,
  ...copyrightProperties
}) => {
  const licenses: GenericKeys<{
    title: string;
    component: ReactElement;
  }> = {
    mit: {
      title: getLicenseTitle('mit'),
      component: <MITLicense />,
    },
    isc: {
      title: getLicenseTitle('isc'),
      component: <ISCLicense />,
    },
    cc0: {
      title: getLicenseTitle('cc0'),
      component: <CC0License />,
    },
  };

  if (!isValidLicense(type)) {
    return (
      <article className="m-auto max-w-3xl p-8 bg-slate-700/20 rounded-xl">
        <h1 className="text-5xl font-extrabold">License not found</h1>
      </article>
    );
  }

  return (
    <article className="m-auto max-w-3xl p-8 bg-slate-700/20 rounded-xl">
      <header className="flex flex-col items-center mb-10">
        <GoLaw size={48} />

        <h1 className="text-5xl font-extrabold">{licenses[type].title}</h1>

        {canShowCopyright(type) ? <Copyright {...copyrightProperties} /> : null}
      </header>

      <main className="flex flex-col gap-2 text-justify">
        {licenses[type].component}
      </main>
    </article>
  );
};
