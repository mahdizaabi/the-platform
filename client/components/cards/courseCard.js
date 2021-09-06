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
                    className="mb-4"
                    cover={
                        <img src={course.image.imageUrl}
                        alt={course.name}
                        style={{"height":"200px", "objectFit": "cover"}}
                        className="p-1"
                        ></img>
                    }
                >

                    <h2 className="font-weight-bold">{course.name}</h2>
                    <p>by {course.instructor.name}</p>
                    <Badge
                    count={course.category}
                    style={{backgroundColor: "#03a9f4"}}
                    className="pb-2 mr-2"
                    ></Badge>
                    <h5>{course.paid ? CurrencyFormater({amount: course.price, currency: "usd"}) : "free"}</h5>
                </Card>
            </a>
        </Link>
    )
}

export default CourseCard;