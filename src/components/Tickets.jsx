import { NavLink } from "react-router-dom"

export const Tickets = () => {


  return (
    <div className="ml-52 mt-8">
      <h2>Tickets</h2>

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

      <div>
        <NavLink to='aboutTickets' className="mr-3">AboutTickets</NavLink>
        <NavLink to='newTickets'>NewTickets</NavLink>

      </div>
    </div>
  )
}
