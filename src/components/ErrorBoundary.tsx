import { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-bold mb-4 text-red-600">
            Something went wrong 😢
          </h1>
          <p className="text-gray-600 mb-6">
            Please refresh the page or try again later.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#20576E] text-white rounded-lg"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
