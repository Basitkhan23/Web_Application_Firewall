import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class AddressForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstName:'',lastName:'',address:'',city:'',country:''
    }
  }

  handleFirstNameChange = (e) => {
    this.setState({firstName:e.target.value});
    window.localStorage.setItem('firstName',e.target.value);
  }

  handleLastNameChange = (e) => {
    this.setState({lastName:e.target.value});
    window.localStorage.setItem('lastName',e.target.value);
  }

  handleAddressChange = (e) => {
    this.setState({address:e.target.value});
    window.localStorage.setItem('address',e.target.value);
  }

  handleCityChange = (e) => {
    this.setState({city:e.target.value});
    window.localStorage.setItem('city',e.target.value);
  }

  handleCountryChange = (e) => {
    this.setState({country:e.target.value});
    window.localStorage.setItem('country',e.target.value);
  }
  
  render(){
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Register
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              value = {this.state.firstName}
              onChange = {this.handleFirstNameChange }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              value = {this.state.lastName}
              onChange = {this.handleLastNameChange }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
              value = {this.state.address}
              onChange = {this.handleAddressChange }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
              value = {this.state.city}
              onChange = {this.handleCityChange }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid> */}
          <Grid item xs={12} >
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
              value = {this.state.country}
              onChange = {this.handleCountryChange }
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;