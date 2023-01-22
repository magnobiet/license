import { License } from '~/enums';
import { GenericKeys } from '~/types';

export const isValidLicense = (license: string) => {
  return (Object.values(License) as Array<string>).includes(
    license.toUpperCase(),
  );
};

export const getLicenseTitle = (license: string) => {
  const licenses: GenericKeys<string> = {
    mit: 'The MIT License (MIT)',
    isc: 'ISC License (ISC)',
    cc0: 'CC0 1.0 Universal (CC0 1.0)',
  };

  return licenses[license.toLowerCase()] || 'License';
};
