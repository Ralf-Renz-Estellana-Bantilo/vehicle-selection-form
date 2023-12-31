'use client'

import React, { memo } from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { SelectOptionType, SelectionInputType } from '../interfaces';

const SelectionInput = ( { className, placeholder, options, value, handleChange, disabled }: SelectionInputType ) =>
{
   return (
      <Select
         label={`${placeholder}`}
         className={`${className}`}
         selectedKeys={[value]}
         isDisabled={disabled}
         onChange={( e ) => handleChange( e.target.value )}
      >
         {options.map( ( option: SelectOptionType ) => (
            <SelectItem key={option.value} textValue={option.value} value={option.value}>
               {option.label}
            </SelectItem>
         ) )}
      </Select>
   )
}

export default memo( SelectionInput )