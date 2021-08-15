import { Component } from "react";
import { withRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

class Datum extends Component {
  state = { loading: true, showModal: false };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    return (
      <div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Datum);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
