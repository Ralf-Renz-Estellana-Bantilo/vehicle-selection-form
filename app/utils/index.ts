import { DataType, MakeType, ModelType, VariationType } from "../interfaces";

const MODELS: any = {
   'ford': {
      'Ranger': ['Raptor', 'Raptor x', 'wildtrak'],
      'Falcon': ['XR6', 'XR6 Turbo', 'XR8'],
      'Falcon Ute': ['XR6', 'XR6 Turbo'],
   },
   'bmw': {
      '130d': ['xDrive 26d', 'xDrive 30d'],
      '240i': ['xDrive 30d', 'xDrive 50d'],
      '320e': ['xDrive 75d', 'xDrive 80d', 'xDrive 85d'],
   },
   'tesla': {
      'Model 3': ['Performance', 'Long Range', 'Dual Motor'],
   },
}

export const VARIATIONS: VariationType[] = []

export const getData = () =>
{
   const keys = Object.keys( MODELS )
   const DATA: DataType[] = []

   keys.forEach( key =>
   {
      const holdData: MakeType[] = []

      const make = key
      const models: string[] = Object.keys( MODELS[key] )
      const badges = Object.values( MODELS[key] )

      const holdModels: ModelType[] = []
      models.forEach( ( model, index ) =>
      {
         const badge: string[] = ( badges[index] as string[] )

         const tempData: any = {
            model,
            badges: badge,
         }

         badge.forEach( ( bdg: string ) =>
         {
            const variation = {
               name: `${key.toUpperCase()} ${model} ${bdg}`,
               car: key,
               model,
               badge: bdg
            }

            VARIATIONS.push( variation )
         } );

         holdModels.push( tempData )
      } );

      holdData.push( {
         make,
         modelList: holdModels,
      } )

      DATA.push( ...holdData )

   } );

   return DATA
}

export const getAllCars = () =>
{
   return getData().map( ( { make } ) => make )
}

export const getModelByCarName = ( car: string ) =>
{
   const filterCars = getData().find( ( { make } ) => make === car )
   const modelList = filterCars?.modelList.map( ( { model } ) => model )

   return { modelList, filterCars }
}

export const getBadgeByModelName = ( car: string, model: string ) =>
{
   const { filterCars } = getModelByCarName( car )
   const badges = filterCars?.modelList.find( ( car ) => car.model === model )

   return badges
}

export const remapData = ( array: any ) =>
{
   const newArray = Array.from( array, ( data: string ) =>
   {
      return {
         label: `${data}`.toUpperCase(),
         value: data,
      }
   } )

   newArray.unshift( {
      label: "",
      value: "",
   } )
   return [...newArray]
}

export const useSessionStorage = () =>
{

   const setSession = ( key: string, value: any ): any =>
   {
      sessionStorage.setItem( key, value )
   }

   const getSession = ( key: string ) =>
   {
      return sessionStorage.getItem( key )
   }

   const removeSession = ( key: string ) =>
   {
      sessionStorage.removeItem( key )
   }

   return { setSession, getSession, removeSession }
}