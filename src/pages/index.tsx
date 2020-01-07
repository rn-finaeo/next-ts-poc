import React, { FC } from "react";

interface AppProps {
  dummy: string;
}
const Title: FC<AppProps> = ({ dummy }) => <h1>Hello {dummy}!</h1>;
const App: FC = () => (
  <div>
    <Title dummy="world" />
  </div>
);

export default App;
