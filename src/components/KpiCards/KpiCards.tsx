import { TrendingUp, TrendingDown } from 'lucide-react';
import { kpiCards } from '../../data/mockData';
import './KpiCards.css';

export default function KpiCards() {
    return (
        <div className="kpi-grid">
            {kpiCards.map((card, i) => (
                <div className="kpi-card" key={i}>
                    <p className="kpi-card__label">{card.label}</p>
                    <div className="kpi-card__bottom">
                        <span className="kpi-card__value">{card.value}</span>
                        <div className={`kpi-card__growth ${card.positive ? 'kpi-card__growth--up' : 'kpi-card__growth--down'}`}>
                            <span>{card.growth}</span>
                            {card.positive
                                ? <TrendingUp size={12} strokeWidth={2.5} />
                                : <TrendingDown size={12} strokeWidth={2.5} />
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
