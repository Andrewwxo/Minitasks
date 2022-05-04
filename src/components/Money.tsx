import React, {useState} from 'react';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilter = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
        <ul>
            {currentMoney.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.banknots}</span>
                        <span>{item.value}</span>
                        <span>{item.number}</span>

                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: '35px'}}>
            <button onClick={() => onClickFilter('All')}>All</button>
            <button onClick={() => onClickFilter('Dollars')}>Dollars</button>
            <button onClick={() => onClickFilter('RUBLS')}>Rubles</button>
        </div>
        </>
)
}

