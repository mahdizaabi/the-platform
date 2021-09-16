import { Card, Badge } from "antd";
import {CurrencyFormater} from "../../utils/utilities"
import Link from 'next/link'

const { Meta } = Card
const CourseCard = ({ course }) => {
    return (
        <Link
            href={`/course/${course.slug}`}
        >
            <a>
                <Card
                    className="shadow  mb-5 bg-white rounded"
                    cover={
                        <img src={course.image_preview}
                        alt={course.name}
                        style={{"height":"150px","padding":"0px", "margin": "0px", "fontSize":"18px","objectFit": "cover"}}
                        className="p-1"
                        ></img>
                    }
                >

                    <h2 style={{"fontSize": "16px", "padding": "0px", "margin": "0px"}} className="font-weight-bold">{course.name}</h2>
                    <p>by {course?.instructor}</p>
                    <Badge
                    count={course.category}
                    style={{backgroundColor: "#03a9f4"}}
                    ></Badge>
                    <h5>{course.paid ? CurrencyFormater({amount: course.price, currency: "usd"}) : "free"}</h5>
                </Card>
            </a>
        </Link>
    )
}

export default CourseCard;