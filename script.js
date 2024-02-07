fetch("https://www.nobroker.in/prophub/wp-content/uploads/2022/05/dataSample.json")
.then((data)=>{
    return data.json();
})
.then((objectData)=>{
    console.log(objectData)
    let td="";
    objectData.map((values)=>{
        td+=`<tr>
        <th>${values.name}</th>
        <th>${values.phone}</th>
        <th>${values.age}</th>
        <th>${values.country}</th>
    </tr>`
    });
    document.getElementById("output").innerHTML=td;
})
.catch((er)=>{
    console.log(error)
})