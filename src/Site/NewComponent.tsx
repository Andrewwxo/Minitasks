import React from 'react';

type NewComponentType = {
    topCars: Array<topCarsType>
}

type topCarsType = {
    manufacturer: string
    model: string
}
export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

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