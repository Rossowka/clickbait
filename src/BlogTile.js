const styles = {
    backgroundColor: '#f5f6fa',
    border: '#353b48 1px solid',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    header: {
        color: '#e84118',
        textTransform: 'uppercase',
    }
}

function BlogTile({ title, intro}) {
    const checkLength = (intro) => {
        if (intro.length > 25) {
            return `${intro.slice(0, 25)}...`;
        } else {
            return intro;
        }
    }
    return (
        <div style={styles}>
            <h2 style={styles.header}>{title}</h2>
            <p>{checkLength(intro)}</p>
        </div>
    );
};

export default BlogTile;

