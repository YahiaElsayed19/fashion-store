"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const QueryProvider = (
    { children
    }: {
        children: React.ReactNode
    }) => {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider