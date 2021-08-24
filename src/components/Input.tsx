import { NextPage } from "next";

interface InputProps {
  label: string;
}

export default function Input({ label }: InputProps) {
  return <h1>{label}</h1>;
}
