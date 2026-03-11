import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const coffees = useLoaderData();
    console.log(coffees);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-7  w-full mx-auto'>
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
        </div>
    );
};

export default Home;