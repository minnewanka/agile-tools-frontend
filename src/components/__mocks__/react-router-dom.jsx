// Mock BrowserRouter
import React from 'react'
/* tslint:disable:no-var-requires*/
const rrd = require('react-router-dom')
// Just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>
module.exports = rrd
