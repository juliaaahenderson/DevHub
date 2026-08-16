import { developerTools } from '@/data/staticData';
import ToolsClient from '@/components/ToolsClient';

export default function ToolsPage() {
  return <ToolsClient developerTools={developerTools} />;
}
