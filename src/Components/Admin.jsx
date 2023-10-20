import React,{useEffect} from 'react'
import"../Style/Admin.css"
const Admin = () => {
    useEffect(() => {
        document.title="KhaoPiyo | Admin"
        }, [])
  return (
   <>
   <div className="AdminDiv">
   <h2 className='Headadmin'>Admin Panel</h2>
   </div>
   </>
  )
}

export default Admin