import React, { useState } from "react";
import axios from "axios";

const CancelRequestComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelSource, setCancelSource] = useState(null);

  const handleRequest = () => {
    setLoading(true);
    setError(null);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setCancelSource(source); // 保存取消源，以便后续取消

    axios
      .get("/api/cats", {
        cancelToken: source.token,
      })
      .then(response => {
        console.log("Response:", response.data);
        setLoading(false);
      })
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        } else {
          setError("An error occurred");
        }
        setLoading(false);
      });

    // axios.post('/user/12345', {
    //   name: 'new name'
    // }, {
    //   cancelToken: source.token
    // })
    // .catch(thrown => {
    //   if (axios.isCancel(thrown)) {
    //     console.log('Request canceled', thrown.message);
    //   } else {
    //     setError('An error occurred');
    //   }
    //   setLoading(false);
    // });
  };

  const handleCancel = () => {
    if (cancelSource) {
      cancelSource.cancel("Operation canceled by the user.");
      setLoading(false);
      setError("Request canceled by user.");
    }
  };

  return (
    <div>
      <button onClick={handleRequest} disabled={loading}>
        {loading ? "Loading..." : "Make Request"}
      </button>
      <button onClick={handleCancel} disabled={!cancelSource || !loading}>
        Cancel Request
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CancelRequestComponent;
