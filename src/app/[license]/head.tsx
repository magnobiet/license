import { DefaultHeadTags } from '~/components';
import { getLicenseTitle } from '~/utililies';
import { LicensePageParameters } from './page';

export default function Head({ params }: LicensePageParameters) {
  return (
    <>
      <DefaultHeadTags />
      <title>{getLicenseTitle(params.license)}</title>
    </>
  );
}
