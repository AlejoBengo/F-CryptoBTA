import React from 'react'
import {Pie} from 'react-chartjs-2';

function Pastel(){
const data={
    labels:['Google','Bing','Baidu','Otros'],
    datasets:[{
        data:[74.56,10.54,9.42,5.42],
        backgroundColor:['#ff0000','blue','green','#00ff00']
    }]
}
const opciones={
    responsive:true
}
    return (
        <div>
            <h1>Aqui va el pastel</h1>
 <Pie data={data} optiones={opciones}/>
        </div>
    )
}
export default Pastel