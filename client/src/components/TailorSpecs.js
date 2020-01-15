import React from 'react'
import { Grid, Paper, Button } from '@material-ui/core'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 50,
    marginBottom: 10
  }
}

export default function TailorSpecs(props) {
  return (
    <Paper style={styles.Paper}>
      <h1>About { props.specs.first_name }</h1>
      <h3>{ props.specs.bio }</h3>

      <Button>Book me!</Button>
    </Paper>
  )
}
