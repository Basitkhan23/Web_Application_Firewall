import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class PaymentForm extends React.Component {

//constructor
constructor(props){
  super(props);
  this.state = {
    cardName:'', cardNumber:'', CVV:''
  }
}
//end

//handleOnChange
handleCardNameChange = (e) => {
  this.setState({cardName:e.target.value});
  window.localStorage.setItem('cardName',e.target.value);
}

handleCardNumberChange = (e) => {
  this.setState({cardNumber:e.target.value});
  window.localStorage.setItem('cardNumber',e.target.value);
}

handleCVVChange = (e) => {
  this.setState({CVV:e.target.value});
  window.localStorage.setItem('CVV',e.target.value);
}

//end

  render(){
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Name on card" fullWidth 
            value = {this.state.cardName}
            onChange = {this.handleCardNameChange }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" label="Card number" fullWidth 
            value = {this.state.cardNumber}
            onChange = {this.handleCardNumberChange }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              value = {this.state.CVV}
            onChange = {this.handleCVVChange }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;