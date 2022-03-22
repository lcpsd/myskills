import React from 'react'
import {StatusBar} from 'react-native'
import Home from './src/pages/Home'

export default function app(){
  return(
    <>
      <Home/>
      <StatusBar barStyle='light-content' />
    </>
  )
}