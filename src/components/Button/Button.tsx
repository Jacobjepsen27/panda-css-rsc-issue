"use client";
import * as React from 'react';
import { flex } from '../../../styled-system/patterns';
import { cx } from '../../../styled-system/css';
import css from 'styled-jsx/css';

function Button(props: React.ComponentPropsWithoutRef<"button">) {
  const rootStyle = cx(
    flex({ direction: "row", _hover: { color: "blue.400" }, border: "1px solid" }),
    props.className
  );
  return <button className={rootStyle}>
    {props.children}
  </button>;
}

export default Button;
