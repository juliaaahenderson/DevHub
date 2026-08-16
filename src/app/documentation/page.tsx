import { documentation } from '@/data/staticData';
import DocumentationClient from '@/components/DocumentationClient';

export default function DocumentationPage() {
  return <DocumentationClient documentation={documentation} />;
}
