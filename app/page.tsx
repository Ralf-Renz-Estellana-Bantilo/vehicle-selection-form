'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react";
import SelectionInput from "./components/SelectionInput";
import { VARIATIONS, getAllCars, getBadgeByModelName, getData, getModelByCarName, remapData } from "./utils";
import { FieldType, OptionType, SelectOptionType, VariationType } from './interfaces';
import ShuffleIcon from './icons/ShuffleIcon';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import ArrowUp from './icons/ArrowUp';

const DEFAULT_VALUE: SelectOptionType = {
  label: '',
  value: '',
}

export default function Home ()
{

  const [selectedCar, setSelectedCar] = useState<string>( '' )
  const [selectedModel, setSelectedModel] = useState<string>( '' )
  const [selectedBadge, setSelectedBadge] = useState<string>( '' )

  const [carOptions, setCarOptions] = useState<SelectOptionType[]>( [DEFAULT_VALUE] )
  const [modelOptions, setModelOptions] = useState<SelectOptionType[]>( [DEFAULT_VALUE] )
  const [badgeOptions, setBadgeOptions] = useState<SelectOptionType[]>( [DEFAULT_VALUE] )

  const [variations, setVariations] = useState<VariationType[] | null>( null )

  const reiterate = ( field: FieldType, value: string ) =>
  {
    if ( !!value )
    {
      if ( field === 'car' )
      {
        const { modelList } = getModelByCarName( value )
        const options = remapData( modelList )

        setModelOptions( options )
        setBadgeOptions( [DEFAULT_VALUE] )
      } else if ( field === 'model' )
      {
        const badgeList = getBadgeByModelName( selectedCar, value )
        const options = remapData( badgeList?.badges )

        setBadgeOptions( options )
      }
    } else
    {
      if ( field === 'car' )
      {
        setModelOptions( [DEFAULT_VALUE] )
        setBadgeOptions( [DEFAULT_VALUE] )
      } else if ( field === 'model' )
      {
        setBadgeOptions( [DEFAULT_VALUE] )
      }
    }
  }

  const handleChangeCar = ( value: string ) =>
  {
    setSelectedCar( value )
    reiterate( 'car', value )
  }
  const handleChangeModel = ( value: string ) =>
  {
    setSelectedModel( value )
    reiterate( 'model', value )
  }
  const handleChangeBadge = ( value: string ) =>
  {
    setSelectedBadge( value )
    reiterate( 'badge', value )
  }

  const handleSelectVariation = ( variation: VariationType ) =>
  {
    handleChangeCar( variation.car )
    handleChangeModel( variation.model )
    handleChangeBadge( variation.badge )
  }

  useEffect( () =>
  {
    const options = remapData( getAllCars() )
    setCarOptions( options )

    setVariations( VARIATIONS.sort( () => Math.random() - 0.5 ) )
  }, [] )


  const isFilledUp = selectedCar !== '' && selectedModel !== '' && selectedBadge !== ''


  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-center gradient-background">
      <div className="flex flex-col gap-4 min-w-[350px] w-[50%]">
        <div className="flex flex-col gap-2 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-border-color p-3">
          <h3 className="text-center font-bold text-accent-primary text-xl">DRILL DOWN FORM</h3>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <SelectionInput value={selectedCar} handleChange={handleChangeCar} placeholder="Make" options={carOptions} />
            </div>
            <div className="flex">
              <SelectionInput value={selectedModel} handleChange={handleChangeModel} placeholder="Model" options={modelOptions} disabled={selectedCar === ''} />
            </div>
            <div className="flex">
              <SelectionInput value={selectedBadge} handleChange={handleChangeBadge} placeholder="Badge" options={badgeOptions} disabled={selectedModel === ''} />
            </div>
            {isFilledUp && <div className="flex">
              <input type="file" name="file" id="" className='text-white' />
            </div>}

          </div>
          <Button color="primary" variant="shadow">
            SUBMIT
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3 min-w-[350px] w-[50%]">
        <div className="flex flex-col gap-4 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-border-color p-3">
          <div className="flex items-center justify-center">
            <h3 className="text-center font-bold text-accent-primary text-xl">SELECT A VEHICLE</h3>
          </div>
          <div className="flex flex-col gap-2">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              className="mySwiper"
            >
              {
                variations?.map( ( variation: VariationType, index ) =>
                {
                  return <SwiperSlide key={index}>
                    <div className="flex justify-between align-center">
                      <h3 className='text-center p-3 text-accent-secondary'>{variation.name}</h3>
                      <Button isIconOnly color="primary" aria-label="Copy" onClick={() => handleSelectVariation( variation )}>
                        <ArrowUp />
                      </Button>
                    </div>
                  </SwiperSlide>
                } )
              }

            </Swiper>
          </div>
        </div>
      </div>
    </main>
  )
}
