import React, { useState, useEffect } from 'react';
import Talents from '../data/Talents&Traits.json'; // Adjust the path to your JSON file

const DataDisplay = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // In a real-world scenario, you might fetch this data from an API
        setItems(Talents.Talents);
    }, []);

    return (
        <div className='Talent-Container'>
            {items.map(item => (
                <div key={item.Id}>
                    <h3>{item.Skill}</h3>
                    <p>{item.Desc}</p>
                    <p><i><a href={item.Ref}>{item.Ref}</a></i></p>
                </div>
            ))}
        </div>
    );
};

export default DataDisplay;
