import * as React from 'react';
import Title from './Title';
import StepForm from './Step-Form-Components/StepForm';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Save User Details</Title>
        <StepForm />
    </React.Fragment>
  );
}
