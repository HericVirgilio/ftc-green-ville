export default function LinhaHorizontal() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '20px', background: 'transparent' }}>
            <div
                style={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, #FEFEFE, #7C6FDE)',
                    borderRadius: '50%',
                    transform: 'translateX(-50%) scaleY(0.1)'
                }}
            />
        </div>
    )
}