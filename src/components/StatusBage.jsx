function StatusBage({activity}) {
    if (activity === true) {
        return <p className="status-bage active">Active</p>;
    } else if (activity === false) {
        return <p className="status-bage inactive">Inactive</p>;
    } else {
        return <p className="status-bage unknown">Unknown</p>;
    }
};

export default StatusBage;