"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '@/slice/userSlice';
import { AppDispatch, RootState } from "@/store/store";
import Increment from "./Increment";

export default function Display() {
  

  const { entities, loading,  } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers())
   
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        entities?.map((user: any) => <h3 key={user.id}>{user.name}</h3>)
      )}
           
       <Increment/>
    </div>
  );
}
