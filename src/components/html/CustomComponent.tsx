import React from 'react';
import { RandomNumber } from '../restriction/RandomNumber';

export const CustomComponent = (
  props: React.ComponentProps<typeof RandomNumber>
) => {
  return <div>{props.value}</div>;
};
