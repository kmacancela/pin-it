import React from 'react'
import { Paper } from '@material-ui/core'

export default function LeftPane({ styles }) {
  return(
    <Paper>
      <form>
        <input type='text' name='zipcode' placeholder='Zip code' />
        <input type='submit' value='Submit' />
      </form>
    </Paper>
  )
}
