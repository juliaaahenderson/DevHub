import { learningPaths } from '@/data/staticData';
import LearnClient from '@/components/LearnClient';
import { Suspense } from 'react';

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-slate-500">Loading learning paths...</div>}>
      <LearnClient learningPaths={learningPaths} />
    </Suspense>
  );
}
