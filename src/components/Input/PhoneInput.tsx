import React, { useState } from 'react';
import InputMask from 'react-input-mask';

export const PhoneInput = ({ value, onChange }: any) => {
  return (
    <InputMask
      mask="(99) 99999-9999"
      value={value}
      onChange={onChange}
      placeholder="(DDD) 12345-6789"
      required
    >
       <input type="tel" />
    </InputMask>
  );
};
