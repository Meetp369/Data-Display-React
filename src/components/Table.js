import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Appcontext from './context';

const Table = () => {

  const {data}=useContext(Appcontext)
    console.log(data)
  return (
    <div>

        <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Last</th>
                <th scope="col">Buy/Sell Price</th>
                <th scope="col">Volume</th>
                <th scope="col">base_unit</th>
                </tr>
            </thead>
            <tbody>
                {data.map((info) => {
                return (
                    <tr>
                    <td>{info.name}</td>
                    <td>{info.last}</td>
                    <td>{info.buy}/{info.sell}</td>

                    <td>{info.volume}</td>
                    <td>{info.base_unit}</td>
                    
                    </tr>
                );
                })}
            </tbody>
            </table>
            {/* <button onClick={()=>{staData()}}>sta data</button>
            <button onClick={()=>{getData()}}>get data</button> */}

    </div>
  )
}

export default Table