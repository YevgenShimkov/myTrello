import React from 'react';
import ICard from '../../../../common/interfaces/ICard';
import Card from '../Card/Card';
import './List.css';

export default function List(props: { title: string; cards: ICard[] }): JSX.Element {
  const { title, cards } = props;
  return (
    <div>
      <h2>{title}</h2>
      {cards.map((item) => (
        <Card key={item.id} title={item.title} />
      ))}
    </div>
  );
}
