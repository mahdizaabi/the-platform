import { Modal } from 'antd'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const ModalCoursePreview = ({ course, preview, visible, setVisible, setPreview }) => {

    const [stopPlaying, setStopPlaying] = useState(false)
    return (
        <>
            <Modal
                title="course_preview"
                visible={visible}
                onCancel={() => {
                    setStopPlaying(false)
                    setPreview(null);
                    setVisible(false)
                    }}
                width="720px"
                footer={null}
            >
                    <ReactPlayer
                        url={preview}
                        playing={stopPlaying}
                        controls={true}
                        width="100%"
                        height="100%"
                    ></ReactPlayer>
            </Modal>

        </>
    )
}

export default ModalCoursePreview