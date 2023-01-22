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
  const hasValidLicense = (
    Object.values(LicenseEnum) as Array<string>
  ).includes(params.license.toUpperCase());

  if (!hasValidLicense) {
    return (
      <article className="m-auto max-w-3xl">
        <h1 className="text-5xl font-extrabold">License not found</h1>
      </article>
    );
  }

  return (
    <License type={params.license as LicenseEnum} holder={defaultHolder} />
  );
}
