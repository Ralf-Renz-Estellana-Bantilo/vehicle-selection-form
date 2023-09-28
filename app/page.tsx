'use client'

import { Button } from "@nextui-org/react";
import SelectionInput from "./components/SelectionInput";
import { getAllCars, getBadgeByModelName, getData, getModelByCarName } from "./utils";

export default function Home ()
{
  const ALLCARS = getAllCars()

  ALLCARS.forEach( car =>
  {
    const { modelList } = getModelByCarName( car )

    modelList?.forEach( model =>
    {
      const badges = getBadgeByModelName( car, model )
      console.log( { model, badges } )
    } );

  } );


  return (
    <main className="flex min-h-screen flex-col items-center justify-center gradient-background">
      <div className="flex flex-col gap-3 min-w-[30%]">
        <div className="flex flex-col gap-2 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-border-color p-3">
          <h3 className="text-center font-bold text-accent-primary">DRILL DOWN FORM</h3>
          <div className="flex flex-col gap-1">
            {/* <div className="flex">
              <SelectionInput placeholder="Make" options={animals} />
            </div>
            <div className="flex">
              <SelectionInput placeholder="Model" options={animals} />
            </div>
            <div className="flex">
              <SelectionInput placeholder="Badge" options={animals} />
            </div> */}
          </div>
          <Button color="primary">
            Button
          </Button>
        </div>
      </div>
    </main>
  )
}
