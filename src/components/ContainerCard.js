import React from 'react';
import LangCard from './LangCard';
import { categories } from '../dbs/db';




function ContainerCard() {



    return (
        <>
            {categories.map((item) => (

                < LangCard

                    key={item.id}
                    logo={item.img}
                    name={item.name}
                    desc={item.options}

                />

            )

            )}
        </>
    )

}
export default ContainerCard