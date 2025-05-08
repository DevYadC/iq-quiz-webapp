import { BarChart } from '@mui/x-charts/BarChart';
import { useBarChartScores } from '../hooks/useBarChartScores';
import { useChartStore } from '../store';
import { useEffect } from 'react';
import ScoreChartTabs from './ScoreChartTabs';

export default function ScoreChart() {

    const selectedScore = useChartStore(state => state.selectedScore);
    const setSelectedScore = useChartStore(state => state.setSelectedScore);

    const { data: barChartScores, isLoading, error } = useBarChartScores();

    useEffect(() => {
        if (barChartScores) {
            const firstProblemSetName = Object.keys(barChartScores)[0];
            setSelectedScore(firstProblemSetName);
        }
    }, [barChartScores]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!barChartScores) return null;

    const problemSetNames = Object.keys(barChartScores);

    return (
        <div>
            <ScoreChartTabs
                keys={problemSetNames}
                setSelectedScore={setSelectedScore}
            />
            <BarChart
                xAxis={[
                    {
                        data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        label: 'Score'
                    }
                ]}
                yAxis={[
                    {
                        label: 'Number of Users'
                    }
                ]}
                series={[{ data: barChartScores[selectedScore] || [] }]}
                height={300}
            />

        </div>
    );
}
