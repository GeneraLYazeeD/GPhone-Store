import { createReducer,on } from "@ngrx/store";
import { increment } from "../state/counter/counter.actions";


export const initailstate=0;

export const counterReduce = createReducer(
  initailstate,
  on(increment,(state)=>state+1)
)
