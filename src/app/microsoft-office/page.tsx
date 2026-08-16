import { microsoftProducts } from '@/data/staticData';
import MicrosoftOfficeClient from '@/components/MicrosoftOfficeClient';

export default function MicrosoftOfficePage() {
  return <MicrosoftOfficeClient microsoftProducts={microsoftProducts} />;
}
