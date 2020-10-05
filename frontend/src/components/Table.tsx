import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {useDispatch, useSelector} from "react-redux";
import {UserListState} from "../redux/reducer";
import {requestApiData} from "../redux/action";

interface User {
    name: string;
    email: string;
    age?: number;
};

export const MyTable: React.FC = () => {
    const users = useSelector((state: UserListState) => state?.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestApiData())
        // eslint-disable-next-line
    }, []);
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.length && users.map((row: User) => (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.age || 0}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}