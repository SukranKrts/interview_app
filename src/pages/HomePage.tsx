import React, { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { DataGrid, GridColDef, GridColumnVisibilityModel, GridFilterModel, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import { Avatar, Box, FormControlLabel, Switch } from "@mui/material";
import { BarChart, PieChart, SparkLineChart } from "@mui/x-charts";


function HomePage() {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'series', headerName: 'Series', width: 150 },
        { field: 'description', headerName: 'Description', width: 300 },
    ];
    const items = [
        { id: 1, name: 'Agent Mobius', series: 'Agent Mobius', description: '' },
        { id: 2, name: 'Captain Marvel', series: 'Captain Marvel', description: '' },
        { id: 3, name: 'Loki', series: 'Loki', description: '' },
        { id: 4, name: 'Monica Rambeau', series: 'Monica Rambeau', description: '' }
    ];
    const rows: GridRowsProp = items;

    //const [items, setİtems] = useState([]);

    /*React.useEffect(() => {
        const response = axios('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=113898c5419a6aee5b354a4939a21f39&hash=54ca4cbf481ade7f7f6fff99d7cf0100')
            .then(response => setİtems(response.data.data.results))

    });*/

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
            <div style={{ position: "absolute", left: '60%', top: '15%' }}>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: items.map(item => (item.name)) }]}
                    series={[{ data: items.map(item => (item.name.length)) }]}
                    width={500}
                    height={300}
                />
            </div>
        </div>

    );
}

export default HomePage;
