'use client';

import { carDealerApi } from '@/app/api/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ResultPage({ params }) {
  const { makeId, year } = params;
  const searchParams = useSearchParams();
  const makeName = searchParams.get('makeName');

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchModels() {
      try {
        const response = await carDealerApi.fetchModelsForMakeAndYear(
          makeId,
          year
        );
        setModels(response);
      } catch (err) {
        setError('Failed to load car models.');
      } finally {
        setLoading(false);
      }
    }

    fetchModels();
  }, [makeId, year]);

  if (loading) {
    return <p className="text-center">Loading models...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full bg-white dark:bg-gray-800 max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl text-foreground font-bold mb-4 text-center">
          Models for the brand {makeName} for {year}
        </h1>

        <ul className="space-y-4">
          {models.map((model) => (
            <li key={model.Model_ID} className="bg-gray-50 p-4 rounded shadow">
              <p className="text-xl text-gray-500 font-semibold">
                {model.Model_Name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
