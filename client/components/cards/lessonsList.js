import { List, Avatar } from 'antd'
import Item from "antd/lib/list/Item";



const SingleCourseLessons = (
    { lessons, visible, preview, setVisible, setPreview }
) => {
    return (<>

        <div className="container pt-2">
            <div className="row">
                <div className="col lesson-list">
                    {lessons && <h4>{lessons.length} lessons</h4>}
                    <hr />
                    <List
                        itemLayout="horizental"
                        dataSource={lessons}
                        renderItem={(item, index) => {
                            return (
                                <Item className="offset-md-2 border-bottom pl-2 pr-2 col-8">
                                    <Item.Meta
                                        avatar={<Avatar> {index + 1} </Avatar>}
                                        title={item.title}
                                    />
                                    {item?.free_preview &&
                                        (<span
                                        className="text-primary pointer"
                                            onClick={() => {
                                                setPreview(item.video.videoUrl)
                                                setVisible(!visible)
                                            }}

                                        >
                                            preview
                                        </span>)
                                    }
                                </Item>)
                        }}
                    />

                </div>
            </div>
        </div>

    </>)

}

export default SingleCourseLessons;