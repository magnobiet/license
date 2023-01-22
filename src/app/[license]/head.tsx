import { DefaultHeadTags } from '~/components';
import { LicensePageParameters } from './page';

const licenses: { [key: string]: string } = {
  mit: 'The MIT License (MIT)',
  isc: 'ISC License (ISC)',
  cc0: 'CC0 1.0 Universal (CC0 1.0)',
};

export default function Head({ params }: LicensePageParameters) {
  return (
    <>
      <DefaultHeadTags />
      <title>{licenses[params.license]}</title>
    </>
  );
}
