import { ChangeEvent, FC, useState } from 'react';

export enum EHairColor {
  Blonde = 'Your hair is blonde, good for you',
  Brown = 'Cool hair color',
  Pink = 'Wow that is so cool',
}

interface IProps {
  name: string;
  age: number;
  email: string;
  hairColor: EHairColor;
}

const Person: FC<IProps> = ({ name, email, age, hairColor }) => {
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
      <br />
      {hairColor}
    </div>
  );
};

export default Person;
