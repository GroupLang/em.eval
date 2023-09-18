// src/components/Filter.tsx
import { FC, ChangeEvent } from 'react';

type FilterProps = {
  value: {
    text: string;
    showAuthorBots: boolean;
  };
  onChange: (value: { text: string; showAuthorBots: boolean }) => void;
};

const Filter: FC<FilterProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, text: event.target.value });
  };

  const toggleAuthorBots = () => {
    onChange({ ...value, showAuthorBots: !value.showAuthorBots });
  };

  return (
    <div className="flex items-center justify-center p-5">
      <input
        type="text"
        placeholder="Filter bots..."
        value={value.text}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
      />
      <button 
        onClick={toggleAuthorBots} 
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${value.showAuthorBots ? 'bg-blue-700' : ''}`}
      >
        {value.showAuthorBots ? 'All Bots' : 'My Bots'}
      </button>
    </div>
  );
};

export default Filter;