import { Suspense } from 'react';
import { VehicleForm } from './components/VehicleForm';
import { carDealerApi } from './api/api';

async function MakesLoader() {
  const makes = await carDealerApi.fetchMakes();
  return makes;
}

export default async function Home() {
  const makes = await MakesLoader();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => i + 2015);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Vehicle filter</h1>
        <Suspense
          fallback={<p className="text-center">Loading vehicle makes...</p>}
        >
          <VehicleForm makes={makes} years={years} />
        </Suspense>
      </div>
    </div>
  );
}
