import { useEffect, useState } from "react";
import { useGridSignalR } from "../context/useGridSignalR";

export const useWorkspaceSummarySignal = () => {
  const { hash, connection } = useGridSignalR();

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveGridSummary", (receivedSummary) => {
        setSummary(receivedSummary);
      });

      connection.invoke("GetGridSummary", hash).catch((err) => {
        console.error("Error calling GetGridSummary:", err.toString());
      });
    }

    return () => {
      if (connection) {
        connection.off("ReceiveGridSummary");
      }
    };
  }, [connection, hash]);

  return { summary };
};
