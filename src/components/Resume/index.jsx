import React from 'react';
import * as C from "./styles"
import ResumeItem from '../ResumeItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
    return(
        <>
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="R$ 2.000" />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="R$ 1.200"/>
            <ResumeItem title="Total" Icon={FaDollarSign} value="R$ 800" />
        </C.Container>
        </>

    ) 
}
 
export default Resume;