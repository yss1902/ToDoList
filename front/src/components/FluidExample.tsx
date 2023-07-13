import Image from 'react-bootstrap/Image';

function FluidExample() {
    return (
        <div style={{ height: '300px', overflow: 'hidden' }}>
            <Image src="https://i.imgur.com/6ninK0v.jpg" fluid style={{ width: '100%', height: 'auto' }}/>
        </div>
    );
}

export default FluidExample;