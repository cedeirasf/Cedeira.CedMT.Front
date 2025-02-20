import type { HubConnection } from "@microsoft/signalr";

export interface SignalRContextType {
  connection: HubConnection | null;
  hash: string;
}
