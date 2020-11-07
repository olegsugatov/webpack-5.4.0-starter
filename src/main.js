// import React from 'react'
// import {render} from 'react-dom'
import 'normalize.css'
// import _ from 'lodash'
import * as $ from 'jquery'
import '@/styles/css/style.css'
import '@/styles/scss/scss.scss'
import '@/styles/less/less.less'
import json from '@/assets/json'
import images from '@/assets/download.png'
import xml from '@/assets/data.xml'
import csv from '@/assets/CSVExample.csv'
import './js/babel'

function add() {
  let count = 0
  count = count + 10 * 30
  console.log('JSON:', json)
  console.log('XML:', xml)
  console.log('CSV:', csv)

  // add image
  const container = document.querySelector('.container')
  container.insertAdjacentHTML('beforeend', `<img src = ${images}>`)

  //
}

add()
