import React from "react";
import { withServiceWorkerUpdater } from "@3m1/service-worker-updater";

const Updater = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return newServiceWorkerDetected ? (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      New version available, if you want install please{" "}
      <button onClick={onLoadNewServiceWorkerAccept}>Click here!</button>
    </div>
  ) : null;
};

export default withServiceWorkerUpdater(Updater);
