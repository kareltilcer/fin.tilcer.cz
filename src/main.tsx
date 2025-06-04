import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ConfigProvider} from "antd";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ConfigProvider>
        <StrictMode>
            <App/>
        </StrictMode>
        </ConfigProvider>
    </QueryClientProvider>,
)
