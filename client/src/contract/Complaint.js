import React from "react";
function Complaint()
{
    return(
        <>
        <div class = "grid justify-center my-12 gap-3">
            <div>
                Check Complaint Status
            </div>
            <div> 
                <input type="text" placeholder="Complaint ID" class = "border-2 text-center"></input>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
            </button>
        </div>

        {/* Pending Approval and Pending Resolution */}

        
            <div class = "grid justify-center my-12 gap-3">
                <div class = "flex justify-center">Pending Approval</div>
                <div class = "flex justify-center"> 
                <input type="text" placeholder="Complaint ID" class = "border-2 text-center"></input>
                </div>
                <div class = "flex justify-center"> 
                <input type="text" placeholder="Remarks" class = "border-2 text-center"></input>
                </div>
                <div class = "flex flex-row gap-7">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Approve Complaint
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Decline Compalint
                </button>

                </div>
            </div>



            <div class = "grid justify-center my-12 gap-3">
                <div class = "flex justify-center">Pending Resolution</div>
                <div class = "flex justify-center"> 
                <input type="text" placeholder="Complaint ID" class = "border-2 text-center"></input>
                </div>
                <div class = "flex justify-center"> 
                <input type="text" placeholder="Remarks" class = "border-2 text-center"></input>
                </div>
                <div class = "flex justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Resolved
                </button>
                

                </div>
            </div>
        
        </>
    )
}

export default Complaint;