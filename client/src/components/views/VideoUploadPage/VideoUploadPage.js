import React from 'react';
import { Typography, Button, Form, message, Input, Icon} from 'antd';
import Dropzone from 'react-dropzone';
import './VideoUploadPage.css';

const { TextArea } = Input;
const { Title } = Typography;

function VideoUploadPage() {
    return (
        <div className='container'>
            <div className='header'>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form>
                <div className='dropzone' onSubmit>
                    { /*drop zone */}
                    <Dropzone onDrop multiple maxSize>
                        {({ getRootProps, getInputProps}) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <Icon type='plus' />

                            </div>
                        )}
                    </Dropzone>

                    {/* {thumnail} */}
                    <div>
                        <img src alt />
                    </div>
                </div>

                <br />
                <br />

                <label>Title</label>
                <Input onChange value />

                <br />
                <br />

                <label>Description </label>
                <TextArea onChange value >

                </TextArea>

                <br />
                <br />

                <select onChange>
                    <option key value></option>
                </select>

                <br />
                <br />

                <select onChange>
                    <option key value></option>
                </select>

                <br />
                <br />

                <Button type='primary' size='large' onClick>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage;
