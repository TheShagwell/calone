
import React from 'react'
import Button from './Button'
import { Podcasting } from '@/constants/constant.index'
import Image from 'next/image'

const Podcasts = () => {
  return (
    <div className='max-container padding-container'>
        <div className="flex sm:flex-col">
            <div className="w-[600px]">
                <h1 className='bold-40 text-offWhite-10 font-clashDisplay'>Trusted by thousands of podcasters</h1>
                <p className='text-offWhite-10 my-6'>Find inspiration for your podcast website by checking out these live podcast websites built with Calone. Our platform offers a user-friendly and customizable website builder that empowers podcasters to showcase their content and engage with their audience.</p>
                <Button type="button" title="Start your free trial" variant="btn_white_outline"/>
            </div>
            <div className="w-[648px]">
                <div className='flex flex-wrap gap-3'>
                    {Podcasting.img.map((img) => (
                        <Image src={img} key={img} alt='podcasts' className='rounded-2xl' width={180} height={180}/>
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Podcasts