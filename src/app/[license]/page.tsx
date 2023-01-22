import { License } from '~/components';
import { defaultHolder } from '~/configurations';
import { License as LicenseEnum } from '~/enums';

export type LicensePageParameters = {
  params: {
    license: string;
    year?: string;
  };
};

export default function LicensePage({ params }: LicensePageParameters) {
  return (
    <License type={params.license as LicenseEnum} holder={defaultHolder} />
  );
}
