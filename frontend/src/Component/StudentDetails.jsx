import React from 'react'



function StudentDetails() {
  return (
    <>
      <table className='w-[70%] flex flex-col justify-start items-center'>
        <tr className='w-full h-12 bg-yellow-700 flex justify-around items-center text-white'>
            <th>Name</th>
            <th>Roll No</th>
            <th>Batch</th>
            <th>College Name</th>
            <th>Gender</th>
            <th>Action</th>
        </tr>
        <tr className='w-full h-12 flex justify-around items-center border border-b-gray-200'>
            <td>Dibi Hembram</td>
            <td>ABCD123A</td>
            <td>2023</td>
            <td>FM University</td>
            <td>Male</td>
            <td className='flex flex-row items-center gap-4 text-white'>
                <button className=''>
                   <div className='w-24 h80 bg-green-700 rounded'>Edit</div>
                </button>
                <button className=''>
                   <div className='w-24 h80 bg-red-700 rounded'>Delete</div>
                </button>
            </td>
        </tr>
      </table>
    </>
  )
}

export default StudentDetails