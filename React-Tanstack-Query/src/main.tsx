import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Step 1 : import 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// step 2 : initialize a queryClient instance 
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* step 3 : wrap the client with provider */}
    <QueryClientProvider client={queryClient}>  
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
