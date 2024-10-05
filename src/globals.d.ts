declare module "redux-persist/lib/storage";
declare module "redux-persist/es/persistReducer";
declare module "redux-persist/integration/react" {
  import { Persistor } from "redux-persist";
  import { ReactNode } from "react";

  interface PersistGateProps {
    loading?: ReactNode;
    persistor: Persistor;
    children: ReactNode;
  }

  export class PersistGate extends React.Component<PersistGateProps> {}
}

declare module "*.png" {
  const value: string;
  export default value;
}
