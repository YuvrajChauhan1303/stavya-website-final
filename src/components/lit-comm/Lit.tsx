// Lit.jsx
import React from 'react';
import PeopleCard from '../people_card/peoplecard';
import { LitDB } from '@/assets/litdata/LitDB';
import { Separator } from '../ui/separator';

const Lit = () => {
  const peopleCardsRows = [];

  for (let i = 0; i < LitDB.length; i += 3) {
    const row = LitDB.slice(i, i + 3).map((person) => (
      <PeopleCard
        key={person.name}
        name={person.name}
        image={person.image}
        team={person.team}
        contact={person.contact}
      />
    ));

    const isTwoPeopleCards = row.length === 2;
    const centerClass = isTwoPeopleCards ? 'justify-center' : '';

    peopleCardsRows.push(
      <div key={i} className={`peopleCards flex flex-row gap-[12rem] ${centerClass}`}>
        {row}
      </div>
    );

    if (i < LitDB.length - 3) {
      peopleCardsRows.push(<div key={`gap-${i}`} className="mt-20" />);
    }
  }

  return (
    <div className="w-full h-96 flex flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <Separator className="py-0.5 bg-slate-300 w-[90vw]" />
          <h1 className="text-5xl mt-5 mb-10">Literature Committee</h1>
        </div>
        <div>{peopleCardsRows}</div>
      </div>
    </div>
  );
};

export default Lit;
