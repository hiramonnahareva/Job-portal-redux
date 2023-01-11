import { data } from "autoprefixer";
import apiSlice from "../../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob : builder.mutation({
            query: (data) => ({
                url: "/job",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["jobs"],
        }), 
        apply : builder.mutation({
            query: (data) => ({
                url: "/apply",
                method: "PATCH",
                body: data,
            }),
        }), 
        getJobs: builder.query({
            query: () => ({
                url: "/jobs",
            }),
            providesTags: ["jobs"]
        }), 
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
        }), 
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
                
            }),
        }), 
    }),
});
export const {
    usePostJobMutation,
     useGetJobsQuery,
      useJobByIdQuery,
       useApplyMutation,
       useGetAppliedJobsQuery,
    
    } = jobApi;