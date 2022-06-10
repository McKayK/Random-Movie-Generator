import React from "react";
import "./WatchProviders.css";

const WatchProviders = ({ watchProviders }) => {
  const streamingPlatforms = watchProviders.map((streamingService) => {
    return (
      <ul>
        <li>{streamingService.provider_name}</li>
      </ul>
    );
  });
  return (
    <div className="container">
      <h1>Streaming Platforms:</h1>
      <div className="watch-providers">{streamingPlatforms}</div>
    </div>
  );
};

export default WatchProviders;
