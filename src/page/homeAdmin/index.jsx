import Sidebar from "../../components/sidebar"
import data from "../../../public/data/db.json";
import Button from "../../components/button";
import AdminModal from "../../components/modal";
import { useState } from "react";
import useIndexAction from '../../hooks/updateJson';

const HomeAdmin = () => {
  const [title, setTitle] = useState(false);

  const changeTitle = () => {
    useIndexAction(1)
  }

  const openTitle = () => setTitle(!title);
  return (
    <>
      <section className="flex">
        <Sidebar />
        <div className="admin-container flex flex-col">
          <h1 className="text-4xl pt-10">Home</h1>
          <div className="pt-10 flex gap-3 justify-between items-center">
            <h1 className="text-3xl font-semibold ">Navbar Title:</h1>
            <h1 className="text-3xl font-mono font-semibold">"{data.navbar.title}"</h1>
            <Button onClick={openTitle} />
          </div>
        </div>
      </section>


      {/* MODALS */}
      {title && (
        <AdminModal showModal={openTitle} >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label className="font-medium text-gray-800">Title</label>
            <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
          </div>
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button onClick={openTitle} className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"> Cancel</button>
            <button onClick={changeTitle} className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"> Change title </button>
          </div>
        </AdminModal>
      )}
    </>
  )
}

export default HomeAdmin