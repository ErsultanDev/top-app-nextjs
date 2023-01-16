import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Htag } from '@/components/Htag/Htag';
import { Button, P, Tag } from '@/components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  }, []);

  return (
    <div>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
      {/* <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="тест" />
      <Textarea placeholder="тест area" /> */}
    </div>
  );
}
