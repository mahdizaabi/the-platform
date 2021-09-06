import { Button, Progress, Switch } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';
import ReactPlayer from 'react-player'

const UpdateLessonFormx = ({
    currentItem,
    setCurrentItem,
    handleUpdateLesson,
    uploading,
    uploadVideoButtonText,
    handleVideo,
    progress,

}) => {
    return <div className="container addLesson-formContainer pt-3">
        <form action="" encType="multipart/form-data" onSubmit={handleUpdateLesson}>
            <input type="text" name="lesson-title-input"
                className="form-control square"
                id="lesson-title-input"
                autoFocus
                required
                onChange={ev => setCurrentItem({
                    ...currentItem,
                    title: ev.target.value
                })}
                value={currentItem?.title}
            />

            <textarea
                name=""
                className="form-control mt-3"
                cols="7"
                rows="7"
                onChange={e => setCurrentItem({
                    ...currentItem,
                    content: e.target.value
                })}
                value={currentItem.content}

            ></textarea>



            <div className="video_input col d-flex align-items-center">

                <label htmlFor="video"
                    className="btn col-4 btn-dark btn-block text-left mt-3"
                >
                    {uploadVideoButtonText ? uploadVideoButtonText : "upload video"}
                    <input
                        type="file"
                        accept="video/*"
                        name="video"
                        hidden

                        onChange={(e) => handleVideo(e)}
                        id="video" />
                </label>
                {uploading && <div className="mt-3 col-3">
                    <Progress style={{ marginLeft: "12px" }} type="circle" percent={progress} width={40} />
                </div>}

              
            </div>

            {!uploading && currentItem.video && currentItem.video.videoUrl && <div className="mt-3 bg-warning d-flex align-items-center justify-content-center">
                    <div className="pt-2 d-flex bg-danger justify-content-center">
                       <ReactPlayer
                       url={currentItem.video.videoUrl}
                        width="410px"
                        height="240px"
                        controls
                       ></ReactPlayer>
                    </div>
                </div>}

            <div className="d-flex justify-content-between pt2">
                <span className="pt-3 text-danger badge">{ currentItem.free_preview ? "video preview is enabled" : "video preview is diabled" }</span>
                <Switch className="float-right mt-2"
                disabled={uploading}
                defaultChecked={currentItem.free_preview}
                name="free_preview"
                onChange={v => setCurrentItem({...currentItem, free_preview: v})}
                />
            </div>

            <Button
                onClick={handleUpdateLesson}
                className="col mt-3"
                size="large"
                type="primary"
                loading={uploading}
                shape="round"
                disabled={currentItem?.content && currentItem?.title ? false : true}
            >
                {uploading && currentItem.video.videoUrl ? "uploading Lesson ..." :
                    uploading && !currentItem.video.videoUrl ?
                        "uploading video" : "add lesson"}
            </Button>
        </form>

    </div>
}

export default UpdateLessonFormx;