// import { useEffect, useState } from "react";

import axios from "axios";

const getData = async ( ...args) =>{
    
    const res = await axios.get(...args);
    const data = res.data;
    return data;
}

export default getData