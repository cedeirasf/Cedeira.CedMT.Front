import type { SignalRContextType } from "@/types/context/signalR.context.types";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  type HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

const Context = createContext<SignalRContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
  hubName: string;
  hash: string;
}

export const GridSignalRProvider = ({
  children,
  hubName,
  hash,
}: ProviderProps) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(`https://localhost:7126/${hubName}`)
      .configureLogging(LogLevel.None)
      .build();

    newConnection
      .start()
      .then(() => {
        setConnection(newConnection);
      })
      .catch((err) => {
        console.error(`Error connecting to ${hubName}:`, err.toString());
      });

    return () => {
      if (newConnection) {
        newConnection.stop();
      }
    };
  }, [hubName, hash]);

  return (
    <Context.Provider
      value={{
        connection,
        hash,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGridSignalR = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useGridSignalR must be used within an GridSignalRProvider"
    );
  }
  return context;
};
