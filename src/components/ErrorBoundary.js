import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 以便下次渲染能够显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你也可以将错误日志记录到服务器
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义错误消息或显示备用 UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
