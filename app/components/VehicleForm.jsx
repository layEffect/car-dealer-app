'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SelectInput } from './SelectInput';

export const VehicleForm = ({ makes, years }) => {
  const [selectedMakeId, setSelectedMakeId] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMakeName, setSelectedMakeName] = useState('');

  const makeOptions = makes.map((make) => ({
    value: make.MakeId,
    label: make.MakeName,
  }));

  const yearOptions = years.map((year) => ({
    value: year,
    label: year,
  }));

  const handleMakeChange = (makeId) => {
    setSelectedMakeId(makeId);
    const make = makes.find((m) => String(m.MakeId) === String(makeId));
    console.log('Found make:', make);
    setSelectedMakeName(make?.MakeName || '');
  };

  return (
    <form className="space-y-4">
      <SelectInput
        label="Vehicle make"
        id="make"
        options={makeOptions}
        value={selectedMakeId}
        onChange={handleMakeChange}
        placeholder="Choose a make"
      />

      <SelectInput
        label="Model Year"
        id="year"
        options={yearOptions}
        value={selectedYear}
        onChange={setSelectedYear}
        placeholder="Choose a year"
      />

      <div>
        <Link
          href={
            selectedMakeId && selectedYear
              ? `/result/${selectedMakeId}/${selectedYear}?makeName=${selectedMakeName}`
              : '#'
          }
        >
          <button
            type="button"
            disabled={!selectedMakeId || !selectedYear}
            className={`w-full py-2 px-4 rounded-md text-white ${
              selectedMakeId && selectedYear
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </Link>
      </div>
    </form>
  );
};
