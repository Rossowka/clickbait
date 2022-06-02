const styles = {
    backgroundColor: '#f5f6fa',
    border: '#353b48 1px solid',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    header: {
        color: '#e84118',
    }
}

function BlogTile({ title, intro}) {
    return (
        <div style={styles}>
            <h2 style={styles.header}>{title}</h2>
            <p>{intro}</p>
        </div>
    );
};

export default BlogTile;

