'use client'
import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import SelectionInput from "./components/SelectionInput";
import { getAllCars, getBadgeByModelName, getData, getModelByCarName } from "./utils";

export default function Home ()
{

  const [selectedCar, setSelectedCars] = useState<string>( 'ford' )
  const [selectedModel, setSelectedModel] = useState<string>( 'Ranger' )
  const [selectedBadge, setSelectedBadge] = useState<string>( '' )

  let carOptions = Array.from( getAllCars(), ( car ) =>
  {
    return {
      label: car,
      value: car,
    }
  } )
  console.log( carOptions )
  let modelOptions: any = undefined
  let badgeOptions: any = undefined

  if ( selectedCar )
  {
    const { modelList } = getModelByCarName( 'ford' )
    modelOptions = Array.from( modelList, ( model ) =>
    {
      return {
        label: model,
        value: model,
      }
    } )

    console.log( modelOptions )
  }
  if ( selectedCar && selectedModel )
  {
    badgeOptions = getBadgeByModelName( 'ford', 'Ranger' )
    badgeOptions = Array.from( modelOptions, ( badge ) =>
    {
      return {
        label: badge,
        value: badge,
      }
    } )

    console.log( badgeOptions )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gradient-background">
      <div className="flex flex-col gap-3 min-w-[30%]">
        <div className="flex flex-col gap-2 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-border-color p-3">
          <h3 className="text-center font-bold text-accent-primary">DRILL DOWN FORM</h3>
          <div className="flex flex-col gap-1">
            <div className="flex">
              <SelectionInput placeholder="Make" options={carOptions} />
            </div>
            <div className="flex">
              <SelectionInput placeholder="Model" options={modelOptions} />
            </div>
            <div className="flex">
              <SelectionInput placeholder="Badge" options={badgeOptions} />
            </div>
          </div>
          <Button color="primary">
            Button
          </Button>
        </div>
      </div>
    </main>
  )
}
