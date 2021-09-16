import React from 'react';

export default function Card(props: { title: string }): JSX.Element {
  const { title } = props;

  return <h2>{title}</h2>;
}
