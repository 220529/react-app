import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // 更新 state 来指示发生错误
    return { hasError: true, message: _.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // 在这里可以记录错误信息到日志服务
    // console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // 当出现错误时显示的备用 UI
      return <h1>{this.state.message}</h1>;
    }
    // 没有错误时渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;
