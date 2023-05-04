import { ChangeEvent, FC, useState } from 'react';

interface IProps {
  name: string;
  age: number;
  email: string;
}

const Person: FC<IProps> = ({ name, email, age }) => {
  const [country, setCountry] = useState<string | null>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input
        type='text'
        placeholder='Write down your country ...'
        onChange={handleChange}
      />
      {country}
    </div>
  );
};

export default Person;
