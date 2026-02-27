import { ChevronDown } from 'lucide-react';
import { trafficSources } from '../../data/mockData';
import './TrafficSources.css';

const progressColors = ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc'];

export default function TrafficSources() {
    const maxValue = Math.max(...trafficSources.map(s => s.value));

    return (
        <div className="traffic-sources">
            <div className="traffic-sources__header">
                <h2 className="traffic-sources__title">Traffic Sources</h2>
                <button className="traffic-sort-btn">
                    <span>Last 7 Days</span>
                    <ChevronDown size={14} />
                </button>
            </div>

            <div className="traffic-list">
                {trafficSources.map((source, i) => (
                    <div className="traffic-item" key={source.name}>
                        <div className="traffic-item__info">
                            <span className="traffic-item__name">{source.name}</span>
                            <span className="traffic-item__value">{source.value.toLocaleString()}</span>
                        </div>
                        <div className="traffic-bar-track">
                            <div
                                className="traffic-bar-fill"
                                style={{
                                    width: `${(source.value / maxValue) * 100}%`,
                                    background: progressColors[i],
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
