import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./redux/store";
import App from './App';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
        }
    }
})

const Providers: React.FC = ({children}) => (
    <ChakraProvider>
        <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
                {children}
            </ReduxProvider>
        </QueryClientProvider>
    </ChakraProvider>
)

ReactDOM.render(
  <React.StrictMode>
      <Providers>
          <App/>
      </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
