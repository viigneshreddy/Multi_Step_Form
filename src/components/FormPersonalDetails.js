import React, { Component } from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextFeild from "material-ui/TextField";
export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MultiThemeProvider>
          <React.Fragment>
            <h1>Enter User Details</h1>
            <TextFeild
              hintText=" Enter Your Occupaction"
              floatingLabelText="Occupaction"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextFeild
              hintText=" Enter The City You Live in"
              floatingLabelText="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextFeild
              hintText=" Enter Your Bio"
              floatingLabelText="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
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

// const styles = {
//     button: {
//         margin: 15
//     }
// }

export default FormPersonalDetails;
