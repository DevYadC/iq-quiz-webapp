import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { useUserScores } from '../hooks/useProblemSets';
import { UserScore } from '../types';

const columns = [
    { width: 180, label: 'Problem Set', dataKey: 'problemSetName' },
    { width: 80, label: 'Score', dataKey: 'score', numeric: true },
    { width: 120, label: 'Total Questions', dataKey: 'totalQuestions', numeric: true },
    { width: 180, label: 'Recorded At', dataKey: 'recordedAt' },
];

const VirtuosoTableComponents: TableComponents<UserScore> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableBody {...props} ref={ref} />
    )),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index: number, row: UserScore) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric ? 'right' : 'left'}
                >
                    {column.dataKey === 'recordedAt'
                        ? new Date(row.recordedAt).toLocaleString()
                        : row[column.dataKey as keyof UserScore]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export default function ScoreTable() {
    const { data: userScores, isLoading, error } = useUserScores();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                data={userScores || []}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
}
