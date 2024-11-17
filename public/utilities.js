const getList = (key) =>{
    const getItem = localStorage.getItem(key);
    if(getItem){
        return JSON.parse(getItem);
    }
    return [];
}

const setList = (key,id) => {
    const getItem = getList(key);
    // const isExist = getItem.find(jodID=> jobID === id);
    const exist = getItem.find(bookId=> bookId===id);
    if(!exist){
        getItem.push(id);
        localStorage.setItem(key,JSON.stringify(getItem));
    }
    // const isExist = getbook.includes(id);

    // if(isExist){
    //     // alert('This item has been already added!');
    //     console.log("This item has been already added");
    // }
    // else{
    //     localStorage.setItem(key,JSON.stringify(id));
    // }
}

// console.log("Connection with browser");


export {getList,setList};