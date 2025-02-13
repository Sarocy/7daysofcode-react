import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, onDelete }) => {
    return (
        <C.TableContainer>
            <C.Table>
                <C.Thead>
                    <C.Tr>
                        <C.Th width={20}>Data</C.Th>
                        <C.Th width={40}>Categoria</C.Th>
                        <C.Th width={40}>Valor</C.Th>
                        <C.Th width={10}>Tipo</C.Th>
                        <C.Th width={10}></C.Th>
                    </C.Tr>
                </C.Thead>
                <C.Tbody>
                    {itens.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                    ))}
                </C.Tbody>
            </C.Table>
        </C.TableContainer>
    );
};

export default Grid;
