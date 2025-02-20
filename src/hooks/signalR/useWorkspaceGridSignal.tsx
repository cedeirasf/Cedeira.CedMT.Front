import { useEffect, useState } from "react";
import { useGridSignalR } from "../context/useGridSignalR";

export const useWorkspaceGridSignal = () => {
  const { hash, connection } = useGridSignalR();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (connection) {
      connection.on("ReceiveRecords", (receivedRecords) => {
        setRecords(receivedRecords);
      });

      connection.invoke("GetGridRecords", hash).catch((err) => {
        console.error("Error calling GetGridRecords:", err.toString());
      });
    }

    return () => {
      if (connection) {
        connection.off("ReceiveRecords");
      }
    };
  }, [connection, hash]);

  return { records };
};
