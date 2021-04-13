import React from 'react';
import { Typography, Button, Form, message, Input, Icon} from 'antd';
import './VideoUploadPage.css';

const { Title } = Typography;
function VideoUploadPage() {
    return (
        <div className='container'>
            <div className='header'>
                <Title level={2}>Upload Video</Title>
            </div>
        </div>
    )
}

export default VideoUploadPage;
