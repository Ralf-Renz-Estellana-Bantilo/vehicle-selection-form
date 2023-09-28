import { DataType, MakeType, ModelType } from "../interfaces";

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

export const getData = () =>
{
   const keys = Object.keys( MODELS )
   const DATA: DataType[] = []

   keys.forEach( key =>
   {
      const holdData: MakeType[] = []

      const make = key
      const models = Object.keys( MODELS[key] )
      const badges = Object.values( MODELS[key] )

      const holdModels: ModelType[] = []
      models.forEach( ( model, index ) =>
      {
         const badge = badges[index]

         const tempData: any = {
            model,
            badges: badge,
         }

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
   const filterCars = getData().find( ( data ) => data.make === car )

   const modelList = filterCars?.modelList.map( ( { model } ) => model )


   return { modelList, filterCars }
}

export const getBadgeByModelName = ( car: string, model: string ) =>
{
   const { filterCars } = getModelByCarName( car )
   const filterModels = filterCars?.modelList.filter( ( car ) => car.model === model )

   const badgeList = filterModels?.map( ( { badges } ) => badges )

   return badgeList
}

