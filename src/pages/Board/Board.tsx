import React from 'react';
import List from './components/List/List';
import './Board.css';

const state = {
  title: 'Моя тестовая доска',
  lists: [
    {
      id: 1,
      title: 'Планы',
      cards: [
        { id: 1, title: 'помыть кота' },
        { id: 2, title: 'приготовить суп' },
        { id: 3, title: 'сходить в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процессе',
      cards: [{ id: 4, title: 'посмотреть сериал' }],
    },
    {
      id: 3,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
  ],
};

export default class Board extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <h1>{state.title}</h1>
        {state.lists.map((cards) => (
          <List key={cards.id} title={cards.title} cards={cards.cards} />
        ))}
        <button>Create list</button>
      </div>
    );
  }
}
