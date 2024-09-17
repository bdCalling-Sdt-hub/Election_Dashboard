import { api } from "../api/apislice";

const dashboardSlices = api.injectEndpoints({ 
  endpoints:(builder)=>({

    // subscriber  
    subscriber:builder.query({ 
        query:(page)=>{ 
          const params= new URLSearchParams() 
          if(page)params.append("page" ,page)
          return{
 url:`/subscribe?${params.toString()}`
          }
        }
    }),  


    // state  
    getState:builder.query({
      query:({page, limit})=>{ 
        const params= new URLSearchParams() 
        if(page)params.append("page" ,page)
        if(limit)params.append("limit" ,limit)
        return{
 url:`/state?${params.toString()}`
        }
      }
    }) ,
    // add state  
    addState:builder.mutation({
query:(value)=>({
  url:"/state" ,
  method:"POST" ,
  body:value
})
    }) ,
    // update state  
    updateState:builder.mutation({ 
      query:(value)=>{ 
        //console.log("state" , value);
        return{
          url:`/state/${value?.id}` ,
          method:"PATCH" , 
          body:value
        }
      }
    }) , 
    // delete state  
    deleteState:builder.mutation({
      query:(id)=>({
        url:`/state/${id}` ,
        method:"DELETE"
      })
    }) , 
 


    // election  
    getElection:builder.query({
      query:(page)=>{ 
        const params= new URLSearchParams() 
        if(page)params.append("page" ,page)
        return{
 url:`/election?${params.toString()}`
        }
      }
    }) , 

    // add election  
    addElection:builder.mutation({
query:(value)=>({
  url:"/election" ,
  method:"POST" ,
  body:value
})
    }) , 

    // update election  
    updateElection:builder.mutation({ 
      query:(value)=>{ 
        //console.log("election" , value);
        return{
          url:`/election/${value?.id}` ,
          method:"PATCH" , 
          body:value
        }
      }
    }) ,  

    // delete election  
    deleteElection:builder.mutation({
      query:(id)=>({
        url:`/election/${id}` ,
        method:"DELETE"
      })
    }) ,  

  // Add candidate  page
  getCandidate:builder.query({
    query:({page , search})=>{ 
      const params = new URLSearchParams()  
      if(search)params.append("searchTerm" , search)
      if(page)params.append("page" , page)
      return{
        url:`/candidate?${params.toString()}`
      }
    }
  })  ,  

  // add candidate  
  addCandidate:builder.mutation({
    query:(value)=>{ 
      //console.log(value);
      return{
        url:"/candidate/add-candidate" ,
        method:"POST" ,
        body: value
      }
    }
  }) , 

  // update candidate  
  updateCandidate: builder.mutation({
    query:({id , formdata })=>{  
      //console.log(id);
return{
  url:`/candidate/${id}` ,
  method:"PATCH" ,
  body: formdata 
}
    }
  }) , 

  // delete candidate  
  deleteCandidate: builder.mutation({
    query:(id)=>({
url:`/candidate/${id}` ,
method:"DELETE"
    })
  }) ,  

  // candidate issues post and update  
  candidateIssues:builder.mutation({
    query:({id ,value})=>{  
      // //console.log("mithila",value);
      return{
        url:`/candidate/candidate-issues/${id}` ,
        method:"PATCH" ,
        body:value
      }
      
    }
  }) , 
  deleteCandidateIssues:builder.mutation({
query:(id)=>({
  url:`/candidate/candidate-issues/${id}` ,
  method:"DELETE"
})
  }),
 
  // privacy policy  
  getPrivacy:builder.query({
    query:()=>"/rule/privacy-policy"
  }) , 
  // update privacy  
  updatePrivacy:builder.mutation({
     query:(value)=>({
      url:"/rule/privacy-policy" ,
      method:"PATCH" , 
      body: value
     })
  }) , 

  // terms & condition  
  getTerms:builder.query({
    query:()=>"/rule/terms-and-conditions"
  }) , 
  updateTerms: builder.mutation({
    query:(value)=>({
      url:"/rule/terms-and-conditions" ,
      method:"PATCH" , 
      body:value
    })
  }) , 

  // FAQ  
  getFaq:builder.query({
    query:(page)=>{ 
      const params= new URLSearchParams() 
      if(page)params.append("page" ,page)
      return{
        url:`/faq?${params.toString()}`} 
    }
  }) , 
addFaq:builder.mutation({
query:(value)=>({
  url:"/faq/create-faq" ,
  method:"POST" ,
  body:value
})
}) , 
updateFaq:builder.mutation({
  query:(data)=>{  
    //console.log("faq data",data);
    return{
      url:`/faq/${data?._id}` ,
      method:"PATCH" ,
      body:data
    }
  }
}) , 
deleteFaq:builder.mutation({
  query:(id)=>({
    url:`/faq/${id}` ,
    method:"DELETE"
  })
}) , 

// about us  
getAbout:builder.query({
  query:()=>"/rule/about"
}) ,
updateAbout:builder.mutation({
  query:(value)=>({
    url:"/rule/about" ,
    method:"PATCH" , 
    body:value
  })
}) , 

// Learn about Election 
getAboutElection:builder.query({
  query:(page)=>{ 
    const params = new URLSearchParams()  
      if(page)params.append("page" , page)
    return{
      url:`/learn?${params.toString()}`
    }
  }
}) ,
postAboutElection:builder.mutation({
  query:(value)=>({
    url:"/learn" ,
    method:"POST",
    body:value
  })
}) ,
updateAboutElection:builder.mutation({
  query:({id , formData})=>{
    return{
url:`/learn/${id}`,
method:"PATCH" ,
body:formData
    }
  }
}) ,
deleteAboutElection:builder.mutation({
  query:(id)=>({
    url:`/learn/${id}` ,
    method:"DELETE"
  })
}) , 

// all news  
getNews:builder.query({
  query:({page , search})=>{
    const params = new URLSearchParams()  
      if(search)params.append("searchTerm" , search)
      if(page)params.append("page" , page)
    return{
    url:`/news?${params.toString()}`
  }}
})  ,
createNews:builder.mutation({
  query:(value)=>({
    url:"/news/create-news" ,
    method:"POST" ,
    body:value
  })
}) , 
updateNews:builder.mutation({
  query:({id,formData})=>{
    return{
      url:`/news/${id}` ,
      method:"PATCH" ,
      body:formData
    }
  }
}) ,  
updateHighlight:builder.mutation({
query:(id)=>({
  url:`/news/highlight/${id}` ,
  method:"PATCH"
})
}) ,
deleteNews:builder.mutation({
  query:(id)=>({
url:`/news/${id}` ,
method:"DELETE"
  })
}) , 

// donation history  
getDonation:builder.query({
  query:(page)=>{ 
    const params= new URLSearchParams() 
    if(page)params.append("page" ,page)
    return{ 
      url:`/donate?${params.toString()}` 
    } }
}) , 

// voter important issues  
getVoterIssues:builder.query({
  query:(page)=>{ 
    const params= new URLSearchParams() 
    if(page)params.append("page" ,page)
    return{
 url:`/voter-issue?${params.toString()}`
    }
  }
}) , 
// voter Feedback  
getFeedback:builder.query({ 
  query:(page)=>{ 
    const params = new URLSearchParams()  
    if(page)params.append("page" , page)
    return{
      url:`/feedback?${params.toString()}`
    }
  } 
}) ,

  })
}) 

export const {useSubscriberQuery ,useGetStateQuery , useAddStateMutation , useUpdateStateMutation , useDeleteStateMutation ,useGetElectionQuery ,useAddElectionMutation ,useDeleteElectionMutation ,useUpdateElectionMutation , useGetCandidateQuery , useAddCandidateMutation , useUpdateCandidateMutation , useDeleteCandidateMutation ,useGetPrivacyQuery , useUpdatePrivacyMutation , useGetTermsQuery , useUpdateTermsMutation , useGetFaqQuery ,useAddFaqMutation ,useUpdateFaqMutation , useDeleteFaqMutation ,useGetAboutQuery ,useUpdateAboutMutation ,useGetAboutElectionQuery,usePostAboutElectionMutation,useUpdateAboutElectionMutation , useDeleteAboutElectionMutation , useGetNewsQuery , useCreateNewsMutation ,useUpdateNewsMutation ,useDeleteNewsMutation , useGetDonationQuery , useGetVoterIssuesQuery ,useGetFeedbackQuery ,useUpdateHighlightMutation ,useCandidateIssuesMutation , useDeleteCandidateIssuesMutation}= dashboardSlices