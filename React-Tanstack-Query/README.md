
## TanStack Query is a React library make our life easier while data fetching. It useful for : 

  1️⃣ Data Caching (So You Don't Refetch the Same Data Every Time)
    👉 Normally, if you go back and forth between pages, you'd refetch the same data again.
    👉 With TanStack Query, it caches API responses, so it won’t refetch unless needed.

  2️⃣ Auto-Refetch When Data Becomes Stale
    👉 With axios or fetch, you manually refetch data.
    👉 TanStack Query automatically refetches when needed.
      ✅ Example: If you're viewing a blog post and someone edits it, TanStack Query can auto-fetch the latest version without a manual refresh.

  3️⃣ Loading & Error States Built-in
    👉 Normally, you need to handle isLoading and isError manually.
    👉 With TanStack Query, it's built-in.

  4️⃣ Mutations (Easier POST, PUT, DELETE Requests)
    👉 Instead of handling manual setState after every API call, TanStack Query makes state updates automatic.

  5️⃣ Pagination & Infinite Scrolling Made Easy
    👉 No need to manually track pages & offsets.
    👉 TanStack Query fetches next pages automatically.



## Setup 
  1. npm install @tanstack/react-query
  2. Initialize queryClient, and wrap the app inside the queryClientProvider
  3. Data fetching
    - Usequery --> takes a key and a function ---> key uniquely identifies the data, function have the data fetching logic

  4. Adding/Updating data :
    - useMutation --> takes a function and a onSuccess handler to invalidate the update, facilitating auto refresh