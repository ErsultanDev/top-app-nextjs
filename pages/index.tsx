import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button apperance="primary">Кнопка</Button>
      <Button apperance="ghost">Кнопка</Button>
    </div>
  );
}
