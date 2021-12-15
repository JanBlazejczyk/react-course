import React from "react";

import { UserInfoContext } from "../Contexts/UserInfo";

function withUser(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedUsername: "jan@kowalski.pl"
      };
    }

    render() {
      return (
        <UserInfoContext.Provider value={this.state.loggedUsername}>
          <WrappedComponent />
        </UserInfoContext.Provider>
      );
    }
  };
}

export default withUser;
