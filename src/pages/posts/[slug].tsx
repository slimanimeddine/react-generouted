import { useParams } from "react-router-dom"

export default function Post() {
    const params = useParams()
    return (
        <>
            post {params.slug}
        </>
    )
}