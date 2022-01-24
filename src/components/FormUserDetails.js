import React, { Component } from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import TextFeild from "material-ui/TextField";
// import Button from "@mui/material/Button";
// import RaisedButton from "material-ui/RaisedButton/RaisedButton";
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MultiThemeProvider>
          <React.Fragment>
            <h1>Enter User Details</h1>
            <TextFeild
              hintText=" Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextFeild
              hintText=" Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextFeild
              type="email"
              hintText=" Enter Your Email"
              floatingLabelText="Email Id"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />

            <br />
            {/* <RaisedButton
                      label="Continue"
                      primary={true}
                      style={styles.button}
                      onClick={this.continue}
                  >
                  </RaisedButton> */}
            <button onClick={this.continue}>Continue</button>
          </React.Fragment>
        </MultiThemeProvider>
      </div>
    );
  }
}

// const styles = {
//     button: {
//         margin: 15
//     }
// }

export default FormUserDetails;
