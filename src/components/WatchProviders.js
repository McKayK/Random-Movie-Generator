import React from "react";
import "./WatchProviders.css";

const WatchProviders = ({ watchProviders }) => {
  let streamingPlatforms;
  if (watchProviders) {
    streamingPlatforms = watchProviders.map((streamingService) => {
      return (
        <li key={streamingService.provider_name}>
          {streamingService.provider_name}
        </li>
      );
    });
  }
  return (
    <div className="container">
      <h1>Streaming Platforms:</h1>
      <ul className="watch-providers">{streamingPlatforms}</ul>
    </div>
  );
};

export default WatchProviders;
