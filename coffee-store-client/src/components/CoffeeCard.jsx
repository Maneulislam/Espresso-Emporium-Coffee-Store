import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

    const { _id, photo, name, price, supplier } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className='max-w-9/12 mx-auto  '>
            <div className="card card-side  shadow-sm bg-gray-100 w-xl  items-center pr-7 ">
                <div>
                    <img
                        src={photo}
                        alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Supplier: {supplier}</p>

                </div>
                <div className="join join-vertical space-y-4">
                    <button className="btn join-item">View</button>
                    <button className="btn join-item">Edit</button>
                    <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;