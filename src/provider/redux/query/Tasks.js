import { createApi } from "@reduxjs/toolkit/query/react";

const TaskApi = createApi({
  baseQuery: fetchBaseQuery({}),
});
