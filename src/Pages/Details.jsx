import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = (  ) => {
    const loadedDetails = useLoaderData();
    console.log(loadedDetails);
    const { _id, image, SpotName, Country } = loadedDetails;
    return (
        <div>
            <h1 className="text-4xl">D     E     T      A     I      L     S  S  s s ssssssssss</h1>
            <h1 className="text-3xl">Country:{Country}</h1>
        </div>
    );
};

export default Details;