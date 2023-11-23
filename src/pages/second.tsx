
import type { NextPage } from "next";
import Image from 'next/image'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../store/store';
import { retrieveCountry, selectCountries } from '../store/slices/countriesSlice';




const Second: NextPage = () => {
  const dispatch = useAppDispatch()
  const country = useAppSelector(selectCountries)
  useEffect(() => {
    dispatch(retrieveCountry())
  }, [dispatch])


  return (
    <div id="container">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/second">Second</Link>
        </li>

      </ul>
      <br></br>
      <br></br>
      <h1>Second Page</h1>

      <ul>
        {country.map(userr => (
          <li>
            <Image
              src={userr.flags.png}
              width={500}
              height={500}
              alt="Picture of the author"
            /> -  {userr.flag} - {userr.name.common}
          </li>
        ))}
      </ul>


    </div>
  );
};

export default Second;