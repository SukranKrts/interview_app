import React, { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { DataGrid, GridColDef, GridColumnVisibilityModel, GridFilterModel, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts";


function HomePage() {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'series', headerName: 'Series', width: 180 },
        { field: 'description', headerName: 'Description', width: 300 },
    ];
    /*const items = [
        { id: 1, name: 'Agent Mobius', series: 'Agent Mobius', description: '' },
        { id: 2, name: 'Captain Marvel', series: 'Captain Marvel', description: '' },
        { id: 3, name: 'Loki', series: 'Loki', description: '' },
        { id: 4, name: 'Monica Rambeau', series: 'Monica Rambeau', description: '' }
    ];*/

    const [items, setİtems] = useState([]);

    React.useEffect(() => {
        const response = axios('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=113898c5419a6aee5b354a4939a21f39&hash=54ca4cbf481ade7f7f6fff99d7cf0100')
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
            <div>
                <div style={{float: 'left', marginLeft: '40px', marginTop: '50px'}}>
                    <Box sx={{ width: 1 }}>
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
                <div style={{ float: 'right', marginRight: '20px', marginTop: '50px' }}>
                    
                </div>
            </div>
            </div>
    );
}

export default HomePage;
