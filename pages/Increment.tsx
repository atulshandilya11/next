"use client";

import React,{useState}  from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from '@/slice/userSlice';
import { AppDispatch, RootState } from "@/store/store";





export default function Increment() {
    const [storeValue,setStoreValue]=useState<string[]>([])
  

  const { value } = useSelector(
    (state: RootState) => state.user
  );
  console.log(value)

  const dispatch = useDispatch<AppDispatch>();



  return (
    <div>
      <h1>Whenever store value update Here we can store the value</h1>
     <button onClick={()=>setStoreValue(pV=>[...pV, value])} >StoreValue</button>
       <ul>
        {storeValue.map((ele,index) => (
          <li key={index} >{ele}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(increment())}>Click on me</button>
                <h1>{value}</h1>
    </div>
  );
}
