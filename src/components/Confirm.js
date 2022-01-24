import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import TextFeild from "material-ui/TextField";
export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <div>
        <MultiThemeProvider>
          <React.Fragment>
            <h1>Confirm User Data</h1>
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="City" secondaryText={city} />
              <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
            <br />
            <br />
            <button onClick={this.continue}>Continue</button>
            <br />
            <br />
            <button onClick={this.back}>Back</button>
          </React.Fragment>
        </MultiThemeProvider>
      </div>
    );
  }
}

export default Confirm;
