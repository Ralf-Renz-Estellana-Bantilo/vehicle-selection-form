'use client'

import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { SelectOptionType, SelectionInputType } from '../interfaces';

const SelectionInput = ( { className, placeholder, options }: SelectionInputType ) =>
{
   return (
      <Select
         label={`${placeholder}`}
         className={className}
      >
         {options.map( ( option: SelectOptionType ) => (
            <SelectItem key={option.value} value={option.value}>
               {option.label}
            </SelectItem>
         ) )}
      </Select>
   )
}

export default SelectionInput