import React, {useContext, useState} from 'react';
import '../../App.css';
import Card from "../../components/Card/Card";
import {useData} from "../../utils/DataContext";
import LineChart from "../../components/Chart/Chart";


const Content = ({ activePage }) => {
    const { data } = useData();
    const [res, setRes] = useState({});

    let sumSales = 0;
    let sumLoss = 0;
    let sumAbil = 0;
    let days = 0;

    const resSales = {};
    const resLoss = {};
    const resAbil = {};

    const resManagers = {};

    for (const date in data) {
      let sales = 0;
      let loss = 0;
      let abil = 0;
      days += 1;
      for (const person in data[date]) {
        sales += data[date][person][0];
        loss += data[date][person][1];
        abil += data[date][person][2];

        sumSales += data[date][person][0];
        sumLoss += data[date][person][1];
        sumAbil += data[date][person][2];
      }
      resSales[date] = sales;
      resLoss[date] = loss;
      resAbil[date] = abil;
    }


    const result = {};
    for (const date in data) {
        for (const person in data[date]) {
          if (person in result) {
            result[person][0] += data[date][person][0];
            result[person][1] += data[date][person][1];
            result[person][2] += data[date][person][2];
            result[person][3] += 1;
          } else {
              result[person] = [];
              result[person][0] = data[date][person][0];
              result[person][1] = data[date][person][1];
              result[person][2] = data[date][person][2];
              result[person][3] = 1;
          }
        }
      }

    const ChartData = [
    { day: '2023-10-01', value: 10 },
    { day: '2023-10-02', value: 15 },
    // Add more data points as needed
  ];

    switch (activePage) {
        case 'dashboard':
            return (
                <div className="dashboard-content">
                    <div className="cards">
                        <Card logo={<div className="circle-logo"></div>} title="Продажи" number={sumSales} prediction="Прогноз" />
                        <Card logo={<div className="circle-logo"></div>} title="Потери, шт" number={sumLoss} prediction="Прогноз" />
                        <Card logo={<div className="circle-logo"></div>} title="Навыки, %" number={parseInt(sumAbil / days, 10)} prediction="Прогноз" />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Менеджер</th>
                                    <th>Продажи</th>
                                    <th>Потери</th>
                                    <th>Навыки</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(result).map(person => (
                                    <tr key={person}>
                                      <td>{person}</td>
                                        {Object.keys(result[person]).map((value, index) => (
                                            index !== 3 ? (
                                              <td key={index}>
                                                {index === 2 ? parseInt(result[person][index] / result[person][3], 10) : result[person][index]}
                                              </td>
                                            ) : null
                                      ))}
                                    </tr>
                                  ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="graphics-tile">

                        <div className="graphic">
                            <LineChart data={resSales} title={'Продажи'}/>
                        </div>
                        <div className="graphic">
                            <LineChart data={resLoss} title={'Потери'}/>
                        </div>
                        <div className="graphic">
                            <LineChart data={resAbil} title={'Навыки'}/>
                        </div>
                    </div>
                </div>
            );
        case 'users':
            return <div>Users Content</div>;
        case 'settings':
            return <div>Settings Content</div>;
        default:
            return <div>Select a page from the sidebar</div>;
    }
}

export default Content;