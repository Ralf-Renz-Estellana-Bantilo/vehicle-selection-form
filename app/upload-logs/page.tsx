'use client'

import React, { useEffect, useState } from 'react'
import { useSessionStorage } from '../utils'
import { SessionDataType } from '../interfaces'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation';

const page = () =>
{
   const router = useRouter();

   const { getSession } = useSessionStorage()
   const [data, setData] = useState<SessionDataType | null>( null )

   useEffect( () =>
   {
      let sessionData = ( getSession( 'drill-down-session' ) as any )
      sessionData = JSON.parse( sessionData )
      setData( sessionData )
   }, [] )

   return (
      <main className="flex min-h-screen flex-col gap-3 items-center justify-center gradient-background relative">
         <Button color="primary" variant="ghost" className='absolute top-2 left-2' onClick={() => router.push( '/' )}>
            Back
         </Button>
         <div className="flex flex-col gap-4 min-w-[350px] w-[50%]">
            <div className="flex flex-col gap-2 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-border-color p-3">
               <h3 className="text-center font-bold text-accent-primary text-xl">SELECTED VEHICLE</h3>
               <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between px-2">
                     <span className='text-accent-secondary'>Car:</span>
                     <p className='text-accent-primary font-semibold'>{data?.car.toUpperCase()}</p>
                  </div>
                  <div className="flex items-center justify-between px-2">
                     <span className='text-accent-secondary'>Model:</span>
                     <p className='text-accent-primary font-semibold'>{data?.model}</p>
                  </div>
                  <div className="flex items-center justify-between px-2">
                     <span className='text-accent-secondary'>Badge:</span>
                     <p className='text-accent-primary font-semibold'>{data?.badge}</p>
                  </div>
               </div>
               <div className="flex flex-col bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-border-color p-3">
                  <span className='font-semibold text-accent-primary text-medium'>LOGBOOK:</span>
                  <pre className="p-2 text-accent-secondary overflow-auto">{data?.logs}</pre>
               </div>
            </div>
         </div>
      </main>
   )
}

export default page