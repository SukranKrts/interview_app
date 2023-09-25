import React, { useState } from "react";
import Appbar from "../components/Appbar";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { DataGrid, GridColDef, GridColumnVisibilityModel, GridFilterModel, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import { Avatar, Box, FormControlLabel, Switch } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'series', headerName: 'Series', width: 150 },
];
/*const item = [
    { id: 1, name: 'Agent Mobius', description: '', series: 'Agent Mobius' },
    { id: 2, name: 'Captain Marvel', description: '', series: 'Captain Marvel' },
    { id: 3, name: 'Loki', description: '', series: 'Loki' }
];*/

function HomePage() {
    const { isAuthenticated, user } = useAuth0();

    const [items, setİtems] = useState([]);

    React.useEffect(() => {
        const response = axios('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=113898c5419a6aee5b354a4939a21f39&hash=54ca4cbf481ade7f7f6fff99d7cf0100')
            .then(response => setİtems(response.data.data.results))

    });
    const rows: GridRowsProp = items;
    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
        items: [],
        quickFilterExcludeHiddenColumns: true,
        quickFilterValues: [],
    });

    const [columnVisibilityModel, setColumnVisibilityModel] =
        React.useState<GridColumnVisibilityModel>({});

    return (
        <div>
            <Appbar />
            <div style={{ position: "absolute", left: '5%', top: '20%' }}>
                <Box sx={{ width: 1 }}>
                    <FormControlLabel
                        checked={columnVisibilityModel.id !== false}
                        onChange={(event) =>
                            setColumnVisibilityModel(() => ({ id: (event.target as any).checked }))
                        }
                        control={<Switch color="primary" size="small" />}
                        label="Show ID column"
                    />
                    <Box sx={{ height: 400 }}>
                        <DataGrid
                            columns={columns}
                            rows={rows}
                            disableColumnFilter
                            disableDensitySelector
                            slots={{ toolbar: GridToolbar }}
                            filterModel={filterModel}
                            onFilterModelChange={(newModel) => setFilterModel(newModel)}
                            slotProps={{ toolbar: { showQuickFilter: true } }}
                            columnVisibilityModel={columnVisibilityModel}
                            onColumnVisibilityModelChange={(newModel) =>
                                setColumnVisibilityModel(newModel)
                            }
                        />
                    </Box>
                </Box>
            </div>
            <div style={{ position: "absolute", left: '60%', top: '60%' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                            ]
                        },
                    ]}
                    width={400}
                    height={200}
                /></div>
        </div>

    );
}

export default HomePage;
