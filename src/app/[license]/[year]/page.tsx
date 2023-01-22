import { License } from '~/components';
import { defaultHolder } from '~/configurations';
import { License as LicenseEnum } from '~/enums';
import { LicensePageParameters } from '../page';

export default function LicenseWithYearPage({ params }: LicensePageParameters) {
  return (
    <License
      type={params.license as LicenseEnum}
      holder={defaultHolder}
      year={Number(params.year)}
    />
  );
}
