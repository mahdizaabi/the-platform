import { useState } from "react"
import { Badge, Button, Select } from 'antd'
import Avatar from "antd/lib/avatar/avatar";
const { option } = Select;



const CourseCreationFrom = ({
    handleSubmit, handleImage, handleChange, course,
    setCourse, preview, setPreview, uploadButtonText, handleImageRemove }) => {
    const childrens = () => {
        const options = []
        for (let i = 9.99; i <= 99.9; i++) {
            options.push(<option key={i.toFixed(2)}> {i.toFixed(2)} </option>)
        }
        return options;
    }
    /**********/
    //console.log("imaaage => ",course?.image?.imageUrl);
    return (<div className="pt-3 pb-3">
        <form onSubmit={handleSubmit}>
            <div className="form-group m  t-3 mt-3">
                <input type="text" name="name" className="form-control"
                    placeholder="Name of the course"
                    value={course.name}
                    onChange={handleChange} id="course_name" />
            </div>

            <div className="form-group  mt-3 mt-3">
                <textarea
                    style={{ width: "100%" }}
                    name="description" id="course_description" cols="8" rows="8"
                    value={course.description}
                    onChange={handleChange}
                    placeholder="Course description"
                ></textarea>
            </div>
            <div className="form-row d-flex flex-row mt-3 mt-3">
                <div className="col-md-3">
                    <div className="form-group">
                        <Select
                            style={{ width: '100%' }}
                            size="large"
                            value={course.paid}
                            onChange={value => setCourse({ ...course, paid: !course.paid })}
                        >
                            <option value={true}>Paid course</option>
                            <option value={false}>Free course</option>
                        </Select>
                    </div>
                </div>

                {course.paid && <div className="col-md-2 offset-md-1">
                    <div className="form-group">
                        <Select
                            name="prices_array"
                            defaultValue="$9.99"
                            style={{ width: "100%" }}
                            id="prices_array"
                            size="large"
                            onChange={v => setCourse({ ...course, price: v })}
                        >
                            {childrens()}
                        </Select>
                    </div>
                </div>}
            </div>

            <div className="form-group mt-3 mt-3">
                <input type="text" name="category" className="form-control"
                    placeholder="category"
                    value={course.category}
                    onChange={handleChange} id="course_category" />
            </div>

            <div className="form-row mt-3 mt-3">
                <div className="row d-flex align-content-center justify-content-start">
                    <div className="form-group col-md-2 col-5 mt-3">
                        <label style={{ width: "100%" }}
                            className="btn btn-outline-secondary btn-block text-left">
                            {course.loading && !uploadButtonText ? 'Uploading' :
                                !course.loading && !uploadButtonText ? "image Upload" : uploadButtonText}
                            <input
                                type="file"
                                name="image"
                                onChange={handleImage}
                                accept="image/*"
                                hidden
                            />
                        </label>
                    </div>
                    {/*preview && (
                        <div className="col-md-2 col-1 mt-3">
                            <Avatar width={200} src={preview}></Avatar>
                        </div>
                   )*/}

                    {preview &&
                        <div className="col-md-2 col-1 mt-3">
                            <Badge
                                className="pointer"
                                count="X"
                                onClick={handleImageRemove}
                            >
                                <Avatar width={200} src={preview} />
                            </Badge>
                        </div>
                    }
                </div>
            </div>
            <div className="row  mt-3 mt-3">
                <div className="col">
                    <Button
                        type="primary"
                        size="large"
                        shape="round"
                        onClick={handleSubmit}
                        disabled={course.loading || course.uploading}
                        className="btn btn-primary"
                        loading={course.loading}
                    >
                        {course.loading ? "file is uploading" : "save & continue"}
                    </Button>
                </div>
            </div>
        </form>
        {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
    </div>)
}

export default CourseCreationFrom;