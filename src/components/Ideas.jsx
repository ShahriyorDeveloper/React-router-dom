import { useParams } from "react-router-dom";

export const Ideas = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div className="ml-52 mt-8">
    <h2>Ideas : {id}</h2>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-center mt-4 gap-y-2">
      <div className="border-2 p-2 rounded-md mr-2">
        <p>Unresolved</p>
        <h3 className="text-[40px]">60</h3>
      </div>
      <div className="border-2 p-2 rounded-md mr-2">
        <p>Unresolved</p>
        <h3 className="text-[40px]">60</h3>
      </div>
      <div className="border-2 p-2 rounded-md mr-2">
        <p>Unresolved</p>
        <h3 className="text-[40px]">60</h3>
      </div>
      <div className="border-2 p-2 rounded-md mr-2">
        <p>Unresolved</p>
        <h3 className="text-[40px]">60</h3>
      </div>
      
    </div>
  </div>
  )
}
