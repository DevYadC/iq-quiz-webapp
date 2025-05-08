import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ScoreChartTabs({ keys, setSelectedScore }: { keys: string[], setSelectedScore: (score: string) => void }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelectedScore(keys[newValue]);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                {keys.map((key: string) => (
                    <Tab label={key} />
                ))}
            </Tabs>
        </Box>
    );
}
