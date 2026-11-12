function StatusBadge({activity}) {
    if (activity === true) {
        return <span className="status-badge active">Активен</span>;
    } else if (activity === false) {
        return <span className="status-badge inactive">Пауза</span>;
    } else {
        return <span className="status-badge unknown">Неизвестно</span>;
    }
};

export default StatusBadge;