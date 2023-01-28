import { ethers } from "ethers";
const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Discription</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Discription"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">AdharCard No</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your AdharCard No"
            />
            <div className="mb-3">
            <label className="form-label">Place</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Crime Place"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Time of Crime"
            />
          </div>
          
          </div>
          <button
           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
           type="submit"
            className="btn btn-primary"
            disabled={!state.contract}>
            File Your Complaint
          </button>

        </form>
      </div>
    </>
  );
};
export default Buy;
