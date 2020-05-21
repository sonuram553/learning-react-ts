import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../reducers";

class UserHeader extends React.Component<Props> {
  render() {
    return <div className="header">{this.props.user?.name}</div>;
  }
}

const mapStateToProps = (state: RootState, ownProps: PropsFromComponent) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromComponent = { userId: number };
type Props = PropsFromRedux & PropsFromComponent;

export default connector(UserHeader);
