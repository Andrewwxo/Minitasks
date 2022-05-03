import React from 'react';

type NewComponentType = {
    topCars: Array<topCarsType>
}

type topCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {
                    props.topCars.map((item,index) =>
                        <tr key={index}>
                            <td>{item.manufacturer}</td>
                            <td>{item.model}</td>
                        </tr>
                    )
                }
            </table>

        </ul>
    )
}