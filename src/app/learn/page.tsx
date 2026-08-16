import { learningPaths } from '@/data/staticData';
import LearnClient from '@/components/LearnClient';

export default function LearnPage() {
  return <LearnClient learningPaths={learningPaths} />;
}
